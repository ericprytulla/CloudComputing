let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let bcrypt = require('bcrypt');
let cors = require('cors');
const helmet = require('helmet');
let bodyParser = require("body-parser");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let users = [];
let groups = [];
let groupUsers = {};
let port = process.env.PORT || 3000;
const html = __dirname + '/frontend';

//HSTS Error fixed
const sixtyDaysInSeconds = 15768000;
app.use(helmet.hsts({
    maxAge: sixtyDaysInSeconds,
      // Must be enabled to be approved
  includeSubDomains: true,
  preload: true
}));

app.use(helmet());
app.use(cors());
app.use(express.static(html));
app.use(bodyParser.json());



// Sets "X-XSS-Protection: 1; mode=block".
app.use(helmet.xssFilter());

app.use (function (req, res, next) {
    if (!req.secure|| process.env.BLUEMIX_REGION === undefined) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});



io.on('connection', function(socket){
    console.log('a user connected');
    socket.username = socket.handshake.query.username;
    login(socket.username, socket.handshake.query.password).then(res => {
        if (res.user){
            socket.preferred_language = res.preferred_language;
            console.log('a user logged in');
            socket.broadcast.emit('user connected', socket.username, socket.id);
            socket.emit('connected users', users);
            groups.map(group => group.users = groupUsers[group.id]);
            socket.emit('existing groups', groups);
            users.push({id: socket.id, name: socket.username});
            socket.on('chat message', function(msg){
                msg.senderId = socket.id;
                msg.senderName = socket.username;
                let language = '';
                if (msg.to !== "global" && io.sockets.connected[msg.to]) {
                    language = io.sockets.connected[msg.to].preferred_language;
                }
                getTranslation(msg.message, language).then((result) => {
                    msg.message = result;
                    getTone(msg.message).then(mood => {
                        msg.mood = mood;
                        if (msg.to == "global"){
                            socket.broadcast.emit('group message', msg);
                        } else {
                            socket.broadcast.to(msg.to).emit(msg.type + ' message', msg);
                        }
                    });
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
        } else {
            socket.disconnect(true);
        }
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

app.post('/user', function(req, res){
    if ( req.body.user && req.body.password && req.body.preferred_language) {
        register(req.body).then(result => {
            res.send(result);
        });
    } else {
        console.warn('Bad request');
        res.sendStatus(400);
    }
});



const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

const languageTranslator = new LanguageTranslatorV3({
    version: '2019-04-02',
    iam_apikey: 'ZzYTYVQ5lAXy3dv0J1um76VW0KVoxbZlZUe5nZpaloHJ',
    url: 'https://gateway-fra.watsonplatform.net/language-translator/api',
});

function getTranslation(msg, lang){
    return new Promise(resolve => {
        languageTranslator.identify({text: msg})
            .then(identifiedLanguages => {
                let sourcelanguage = identifiedLanguages.languages[0].language;
                    languageTranslator.translate({source: sourcelanguage, target: lang, text: msg})
                        .then(translationResult => {
                            let translation = "";
                            translationResult.translations.forEach(elem=>{
                                translation += elem.translation + " ";
                            });
                            resolve(translation);
                        })
                        .catch(err => {
                            resolve(msg);
                        });

            })
            .catch(err => {
                resolve(msg);
                console.warn('error:', err);
            });
    });
}

register({'user': 'Peter', 'password': 'password', 'preferred_language': 'es'})
    .then(res => {
    console.log(JSON.stringify(res));
    login(res.id, 'password').then(res => {
        console.log(JSON.stringify(res))
    });
});

function register(user){
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('PUT', 'https://delivery-brash-mouse.eu-de.mybluemix.net/user');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('load', function(event) {
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.responseText));
            } else {
                console.warn(request.statusText, request.responseText);
                resolve('Bad Request');
            }
        });
        bcrypt.hash(user.password, 10).then((err, res) => {
            if (!err) {
                user.password = res;
                console.log(user.user + ": " + res);
            } else {
                console.warn(err);
            }

        });
        request.send(JSON.stringify(user));
    });
}


function login(user, password){
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('GET', 'https://delivery-brash-mouse.eu-de.mybluemix.net/user/' + user);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('load', function(event) {
            if (request.status >= 200 && request.status < 300) {
                bcrypt.compare(password, JSON.parse(request.responseText).password).then((err, res) => {
                    if(res){
                        resolve(JSON.parse(request.responseText));
                    } else {
                        console.warn('Wrong Password');
                        resolve({'message': 'Wrong Password'});
                    }
                });

            } else {
                console.warn(request.statusText, request.responseText);
                resolve('Bad Request');
            }
        });
        request.send();
    })
}






http.listen(port, function(){
    console.log('listening on  *:' + port);
});


