require('dotenv').config({silent: true});
let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let cors = require('cors');
let users = [];
let groups = [];
let groupUsers = {};
let port = process.env.PORT || 3000;
const html = __dirname + '/frontend';
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const bodyParser = require('body-parser');
// Create the service wrapper
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
});
app.use(cors())
    .use(bodyParser.json())
    .use(express.static(html));


io.on('connection', function(socket){
    console.log('a user connected');
    socket.username = socket.handshake.query.username;
    socket.broadcast.emit('user connected', socket.username, socket.id);
    socket.emit('connected users', users);
    groups.map(group => group.users = groupUsers[group.id]);
    socket.emit('existing groups', groups);
    users.push({id: socket.id, name: socket.username});
    socket.on('chat message', function(msg){
        msg.sender = socket.id;
        if (msg.to == "global"){
            console.log('message: ' + JSON.stringify(msg));
            socket.broadcast.emit('group message', msg);
        } else {
            console.log('message: ' + JSON.stringify(msg));
            socket.broadcast.to(msg.to).emit(msg.type + ' message', msg);
        }
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
        socket.broadcast.emit('user disconnected', socket.username, socket.id);
        users.splice(users.findIndex((id)=>{return id == this.id}),1);
        delete groupUsers[socket.id];
    });
    socket.on('create group', function (name) {
        console.log('new group');
        socket.join(name);
        groups.push({id:name, users: []});
        groupUsers[name] = [socket.id];
        socket.broadcast.emit('group created', name, socket.id);
    });
    socket.on('join group', function(name) {
        console.log('join group');
        groupUsers[name].push(socket.id);
        socket.join(name);
        socket.broadcast.emit('user joined', name, socket.id);
    });
});



function createToneRequest (request) {
    let toneChatRequest;

    if (request.texts) {
        toneChatRequest = {utterances: []};

        for (let i in request.texts) {
            const utterance = {text: request.texts[i]};
            toneChatRequest.utterances.push(utterance);
        }
    }

    return toneChatRequest;
}

function happyOrUnhappy (response) {
    const happyTones = ['satisfied', 'excited', 'polite', 'sympathetic'];
    const unhappyTones = ['sad', 'frustrated', 'impolite'];

    let happyValue = 0;
    let unhappyValue = 0;

    for (let i in response.utterances_tone) {
        const utteranceTones = response.utterances_tone[i].tones;
        for (let j in utteranceTones) {
            if (happyTones.includes(utteranceTones[j].tone_id)) {
                happyValue = happyValue + utteranceTones[j].score;
            }
            if (unhappyTones.includes(utteranceTones[j].tone_id)) {
                unhappyValue = unhappyValue + utteranceTones[j].score;
            }
        }
    }
    if (happyValue >= unhappyValue) {
        return 'happy';
    }
    else {
        return 'unhappy';
    }
}

/* Example
{
  "texts": ["I do not like what I see", "I like very much what you have said."]
}
*/
app.post('/tone', (req, res, next) => {
    const toneRequest = createToneRequest(req.body);

    if (toneRequest) {
        toneAnalyzer.toneChat(toneRequest, (err, response) => {
            if (err) {
                return next(err);
            }
            const answer = {mood: happyOrUnhappy(response)};
            return res.json(answer);
        });
    }
    else {
        return res.status(400).send({error: 'Invalid Input'});
    }
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
