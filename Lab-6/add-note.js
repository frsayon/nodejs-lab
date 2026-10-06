const fs = require('fs');

const note = process.argv[2];

if (!note) {
    console.log('Please provide a note. Example: node add-note.js "Buy groceries"');
    process.exit(1);
}

const entry = `[${new Date().toLocaleString()}] ${note}\n`;

fs.appendFile('notes.txt', entry, (err) => {
    if (err) throw err;

    console.log('Note added!');
});