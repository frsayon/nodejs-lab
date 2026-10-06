const fs = require('fs').promises;

async function copyContent() {
    try {
        const data = await fs.readFile('sample.txt', 'utf8');

        await fs.writeFile('copy.txt', data);

        console.log('Copied successfully.');
    } catch (err) {
        console.error('Something went wrong:', err.message);
    }
}

copyContent();