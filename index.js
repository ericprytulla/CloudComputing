let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.username = socket.handshake.query.username;
    socket.broadcast.emit('user connected', socket.username);
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        msg.sender = socket.username;
        socket.broadcast.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});
