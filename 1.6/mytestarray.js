var id = [34];

id.push(24);
id.push(56);

console.log(id);

const mine = require('./testfolder/mine');
console.log(mine.id);

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
})


