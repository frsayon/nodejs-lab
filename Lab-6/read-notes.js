const fs = require('fs');

fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('No notes found yet.');
        return;
    }

    console.log(data);
});