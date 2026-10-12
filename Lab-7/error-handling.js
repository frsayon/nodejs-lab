const EventEmitter = require('events');

const risky = new EventEmitter();

risky.on('error', (err) => {
    console.log('Handled gracefully:', err.message);
});

risky.emit('error', new Error('Something broke!'));