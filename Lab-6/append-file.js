const fs = require('fs');

fs.appendFile('output.txt', '\nThis line was appended.', (err) => {
    if (err) throw err;

    console.log('Content appended successfully.');
});