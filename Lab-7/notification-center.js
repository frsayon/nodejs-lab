const EventEmitter = require('events');

class NotificationCenter extends EventEmitter {
    constructor() {
        super();
    }
}

const notifier = new NotificationCenter();

notifier.on('newMessage', (from, text) => {
    console.log(`New message from ${from}: ${text}`);
});

notifier.on('error', (err) => {
    console.log(`Notification error: ${err.message}`);
});

notifier.emit('newMessage', 'Priya', 'You free?');