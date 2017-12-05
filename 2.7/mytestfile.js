const fs = require('fs');

function filesize(filename, cb) {
    if(typeof filename != 'string') {
        return cb(new TypeError('Invalid format of the argument'));
    }
    else {
        fs.stat(filename, (error, stat) => {
            if(error) 
                return cb(error);

            return cb(null, stat.size);
        })
    }
}

filesize(21, (error, size) => {
    if(error)
        throw error;

    console.log("The total size of the file is" + size/1000);
});

console.log('Hello');