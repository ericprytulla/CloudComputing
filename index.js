let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let users= [];

io.on('connection', function(socket){
    console.log('a user connected');
    socket.username = socket.handshake.query.username;
    socket.broadcast.emit('user connected', socket.username, socket.id);
    socket.emit('connected users', users);
    users.push({id: socket.id, name: socket.username});
    socket.on('chat message', function(msg){
        msg.sender = socket.id;
        if (msg.to == "global"){
            console.log('message: ' + JSON.stringify(msg));
            socket.broadcast.emit('chat message', msg);
        } else {
            console.log('message: ' + JSON.stringify(msg));
            socket.broadcast.to(msg.to).emit('personal message', msg);
        }
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
        socket.broadcast.emit('user disconnected', socket.username, socket.id);
        users.splice(users.findIndex((id)=>{return id == this.id}),1);
    });
    socket.on('join group', function(name, socketId) {
        console.log('new group');
    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});
