const EventEmitter = require('events');
const fs = require('fs');

class withTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        
        asyncFunc(...args, (error, data) => {
            this.emit(data);

            console.timeEnd('execute');
        });
    }
}


class eventTest extends EventEmitter {
    execute(doWork) {
        this.emit('begin');

        doWork();

        this.emit('end');
    }
}

const eventtest = new eventTest();

eventtest.on('begin', () => { console.log('Began Execution'); });
eventtest.on('end', () => { console.log('End Execution'); })
eventtest.execute(() => console.log('Execution started'));



const withTime1 = new withTime();
withTime1.execute(fs.readFile, __filename);