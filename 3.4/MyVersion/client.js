const readline = require('readline');
const EventEmitter = require('events');

const client = new EventEmitter();
const server = require('./server')(client);

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    [command, args] = input.split(' ');

    process.stdout.write(command);

    client.emit('command', command, args);
});

server.on('response', (text) => {
    process.stdout.write(text);
})