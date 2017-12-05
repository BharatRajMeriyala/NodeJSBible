const EventEmitter = require('events');

class server extends EventEmitter {
    constructor(client) {
        
        super();

        this.tasks = {};
        this.taskid = 0;

        client.on('command', (command, args) => {

            process.stdout.write('Inside server event' + "\n");

            process.stdout.write(command + "\n");

            process.stdout.write(args + "\n");

            switch(command) {
                case 'add':
                    this.tasks[this.taskid] = args;
                    this.taskid++;
                    this.emit('response', 'Added task successfully');
                    break;

                case 'delete':
                    delete(this.tasks[args]);
                    this.emit('response', 'Deleted task successfully');
                    break;

                case 'ls':
                    var responsetext = '';
                    
                    Object.keys(this.tasks).map(key => {
                        
                        //process.stdout.write(key + "\n");
                        //process.stdout.write(this.tasks[key] + "\n");
                        
                        responsetext += `${key}: ${this.tasks[key]}` + '\n';
                    });

                    this.emit('response', responsetext);
                    break;
            }
        });
    }
}

module.exports = (client) => new server(client);