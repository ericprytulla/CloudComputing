let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let cors = require('cors');
var bodyParser = require("body-parser");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let users = [];
let groups = [];
let groupUsers = {};
let port = process.env.PORT || 3000;
const html = __dirname + '/frontend';


//app.use(cors());
app.use(express.static(html));
app.use(bodyParser.json());

app.use (function (req, res, next) {
    if (req.secure || process.env.BLUEMIX_REGION === undefined) {
        next();
    } else {
        console.log('redirecting to https');
        res.redirect('https://' + req.headers.host + req.url);
    }
});


io.on('connection', function(socket){
    console.log('a user connected');
    socket.username = socket.handshake.query.username;
    socket.broadcast.emit('user connected', socket.username, socket.id);
    socket.emit('connected users', users);
    groups.map(group => group.users = groupUsers[group.id]);
    socket.emit('existing groups', groups);
    users.push({id: socket.id, name: socket.username});
    socket.on('chat message', function(msg){
        msg.senderId = socket.id;
        msg.senderName = socket.username;
        getTone(msg.message).then(mood => {
            msg.mood = mood;
            if (msg.to == "global"){
                socket.broadcast.emit('group message', msg);
            } else {
                socket.broadcast.to(msg.to).emit(msg.type + ' message', msg);
            }
        });

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


function getTone(message){
    return new Promise( resolve => {
        console.log('tone Request');
        let request = new XMLHttpRequest();
        request.open('POST', 'https://sharp-payne.eu-de.mybluemix.net/tone');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('load', function(event) {
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.responseText));
            } else {
                console.warn(request.statusText, request.responseText);
            }
        });
        request.send('{"texts": ["'+ message + '"]}');
    });
};

http.listen(port, function(){
    console.log('listening on  *:' + port);
});
