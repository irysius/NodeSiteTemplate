export function setupSockets(io) {
    var chat = io
        .of('/chat')
        .on('connection', function (socket) {

            socket.on('set username', function (name, callback) {
                console.log('rcv set username', name);
                socket.set('username', name, function () {
                    console.log('set username', name);
                    socket.broadcast.emit('user joined', name);
                    callback(name);
                });
            });

            socket.on('msg', function (data, callback) {
                console.log('rcv msg ', data);
                socket.get('username', function (err, name) {
                    console.log('get username', name);
                    var formattedMessage = name + ' Says: ' + data + '\n';
                    socket.broadcast.emit('msg receive', formattedMessage);
                    callback(formattedMessage);
                });
            });
        });
}