let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http, {'origins': '*:* localhost:* http://localhost:*'});
let bcrypt = require('bcrypt');
let cors = require('cors');
const helmet = require('helmet');
let bodyParser = require("body-parser");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let redis = require('redis');
let adapter = require('socket.io-redis');
let groups = [];
let groupUsers = {};
let port = process.env.PORT || 3000;
const html = __dirname + '/frontend';

const pub = redis.createClient('19404','redis-19404.c14.us-east-1-2.ec2.cloud.redislabs.com',{auth_pass:'6L6ph9bI1BI9mbIWEMcSIbjuzo3YPmkC'});
const sub = redis.createClient('19404','redis-19404.c14.us-east-1-2.ec2.cloud.redislabs.com',{auth_pass:'6L6ph9bI1BI9mbIWEMcSIbjuzo3YPmkC'});

io.adapter(adapter({pubClient: pub, subClient: sub}));

//HSTS Error fixed
const sixtyDaysInSeconds = 15768000;
app.use(helmet.hsts({
    maxAge: sixtyDaysInSeconds,
      // Must be enabled to be approved
  includeSubDomains: true,
  preload: true
}));

app.use(helmet());
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

io.of('/').adapter.customHook = (data, cb) => {
    let lang
    try {
       lang = io.sockets.connected[data].preferred_language
    } catch(err) {
        console.warn('user ' + data + ' not in this node');
    }
    if (lang){
        cb(lang);
    }
};

io.on('connection', function(socket){
    socket.username = socket.handshake.query.username;
    console.log('a user connected: ' + socket.username);
    login(socket.username, socket.handshake.query.password).then(res => {
        if (res.user){
            socket.preferred_language = res.preferred_language;
            console.log('a user logged in: ' + res.user);
            socket.broadcast.emit('user connected', socket.username, socket.id, res.image);
            connectedUsers().then(res => {
                socket.emit('connected users', res);
            });
            groups.map(group => group.users = groupUsers[group.id]);
            socket.emit('existing groups', groups);
            connect({socket_id: socket.id, name: socket.username, image: res.image}).then((res) => {});
            socket.on('chat message', function(msg){
                msg.senderId = socket.id;
                msg.senderName = socket.username;
                console.log("Sender: " + msg.senderName);
                console.log("To: " + msg.to);
                let language = '';
                io.of('/').adapter.customRequest(msg.to, function(err, replies){
                    console.log(replies);
                });
                if (msg.to !== "global" && io.sockets.connected[msg.to]) {
                    language = io.sockets.connected[msg.to].preferred_language;
                }
                getTranslation(msg.message, language).then((result) => {
                    msg.message = result;
                    getTone(msg.message).then(mood => {
                        msg.mood = mood;
                        if (msg.to === "global"){
                            socket.broadcast.emit('group message', msg);
                        } else {
                            socket.broadcast.to(msg.to).emit(msg.type + ' message', msg);
                        }
                    });
                });
            });
            socket.on('disconnect', function(){
                console.log('user disconnected');
                socket.broadcast.emit('user disconnected', socket.username, socket.username);
                disconnect(socket.username, socket.rev);
                delete groupUsers[socket.username];
                io.of('/').adapter.remoteDisconnect(socket.id, true, (err) => {
                    if (err) { console.log(JSON.stringify(err)) }
                    // success
                });
            });
            socket.on('create group', function (name) {
                console.log('new group');
                io.of('/').adapter.remoteJoin(socket.id, name, (err) => {
                    if (err) {
                        console.warn("Remote Create group: " + name + " didnt work. Error: " + err);
                    }
                });
                //socket.join(name);
                groups.push({id:name, users: []});
                groupUsers[name] = [socket.id];
                socket.broadcast.emit('group created', name, socket.username);
            });
            socket.on('join group', function(name) {
                console.log('join group');
                groupUsers[name].push(socket.id);
                //socket.join(name);
                io.of('/').adapter.remoteJoin(socket.id, name, (err) => {
                    if (err) {
                        console.warn("Remote Join group: " + name + " didnt work. Error: " + err);
                    }
                });
                socket.broadcast.emit('user joined', name, socket.username);
            });
        } else {
            //socket.disconnect(true);
            io.of('/').adapter.remoteDisconnect(socket.id, true, (err) => {
                if (err) { console.log(JSON.stringify(err)) }
                // success
            });
        }
    },() => {
        console.log('login failed');
        //socket.disconnect(true);
        io.of('/').adapter.remoteDisconnect(socket.id, true, (err) => {
            if (err) { console.log(JSON.stringify(err)) }
            // success
        });
    }).catch((reason => {
        console.log("Error whlie logging in: " + reason);
    }));

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

app.post('/user', cors(), function(req, res){
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
                console.warn("Register:", request.responseText);
                resolve('Bad Request');
            }
        });
        bcrypt.hash(user.password, 10).then((res) => {
                user.password = res;
                request.send(JSON.stringify(user));
        });
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
                bcrypt.compare(password, JSON.parse(request.responseText).password).then((res) => {
                    if(res){
                        resolve(JSON.parse(request.responseText));
                    } else {
                        console.warn('Wrong Password');
                        resolve({'message': 'Wrong Password'});
                    }
                });

            } else {
                console.warn("Login:", request.responseText);
                resolve('Bad Request');
            }
        });
        request.send();
    })
}

function disconnect(id, rev){
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('DELETE', 'https://delivery-brash-mouse.eu-de.mybluemix.net/disconnect/');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('load', function(event) {
            if (request.status >= 200 && request.status < 300) {
                console.log("disconnect: " + JSON.stringify(request.responseText));
                resolve('disconnected');
            } else {
                console.warn("disconnect: ", request.responseText);
                resolve('Bad Request');
            }
        });
        request.send(JSON.stringify({"id": id, "rev": rev}));
    })
}

function connect(user){
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('POST', 'https://delivery-brash-mouse.eu-de.mybluemix.net/connect/');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('load', function(event) {
            if (request.status >= 200 && request.status < 300) {
                console.log("connect: " + request.responseText);
                resolve(request.responseText);
            } else {
                console.warn("connect: ", request.responseText);
                resolve('Bad Request');
            }
        });
        request.send(JSON.stringify(user));
    })
}

function connectedUsers(){
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('GET', 'https://delivery-brash-mouse.eu-de.mybluemix.net/connectedUsers/');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('load', function(event) {
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.responseText));
            } else {
                console.warn("connected users: ", request.responseText);
                resolve('Bad Request');
            }
        });
        request.send();
    })
}





http.listen(port, function(){
    console.log('listening on  *:' + port);
});


