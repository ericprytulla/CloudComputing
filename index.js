let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pages/login/login.html');
});
app.get('/chat', function(req, res){
    res.sendFile(__dirname + '/pages/home/index.html')
})

io.on('connection', function(socket){
    console.log('a user connected');
    io.emit('user connected', 'a user connected');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});
