const server = require('net').createServer();

var sockets = {};
var socketid = 1;

server.on('connection', (socket) => {

    console.log('client connected');

    socket.write('Welcome client, your unique id is' + socketid);
    
    sockets[socketid] = socket;
    socketid++;

    socket.on('data', (data) => {
        console.log('Entered data is' + data);
        socket.write('data is:' + data);

        Object.keys(sockets).map((key) => {
            (sockets[key]).write("id: " + key + " Entered data is :" + data + "\n");
        });

        

    })
});

server.listen(9700, () => console.log('Server bound'));