const fs = require('fs');

const readFileAsArray = function(filename, cb) {
    fs.readFile(filename, (error, data) => {
        if(error)
            cb(error);

        const lines = data.toString().split('\n');

        cb(null, lines);
    });
}

const readFileAsArrayCallback = function(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (error, data) => {
            if(error){
                reject(error);
            }
    
            const lines = data.toString().split('\n');
            resolve(lines);
        });
    });
}

readFileAsArrayCallback('./numbers').then(lines => {
    const numbers = lines.map(Number);
    
        const oddnumbers = numbers.filter(num => num % 2 == 0);
    
        console.log('Odd numbers count is: ' + oddnumbers.length);
})
.catch(error => console.error);


readFileAsArray('./numbers', (error, lines) => {
    if(error)
        throw error;

    const numbers = lines.map(Number);

    const oddnumbers = numbers.filter(num => num % 2 == 0);

    console.log('Odd numbers count is: ' + oddnumbers.length);
});