const fs = require('fs');

const data = fs.readFileSync('sample.txt', 'utf8');

console.log(data);
console.log('This line runs AFTER the file has been fully read.');