const EventEmitter = require('events');

const app = new EventEmitter();

app.once('firstLogin', (user) => {
    console.log(`Welcome bonus applied for ${user}!`);
});

app.on('login', (user) => {
    console.log(`${user} logged in.`);
});

app.emit('firstLogin', 'Aman');
app.emit('login', 'Aman');

app.emit('firstLogin', 'Aman'); 
app.emit('login', 'Aman');     