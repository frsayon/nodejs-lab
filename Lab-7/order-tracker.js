const EventEmitter = require('events');

class OrderTracker extends EventEmitter {
    constructor() {
        super();
        this.firstOrder = true;
    }

    placeOrder(customer, item) {
        this.emit('placed', customer, item);

        setTimeout(() => {
            this.emit('prepared', customer, item);

            setTimeout(() => {
                this.emit('delivered', customer, item);
            }, 1000);

        }, 1000);
    }
}

const tracker = new OrderTracker();


// Listener 1: Customer notification
tracker.on('placed', (customer, item) => {
    console.log(`Order placed by ${customer}: ${item}`);
});


// Listener 2: Kitchen
tracker.on('prepared', (customer, item) => {
    console.log(`Order prepared for ${customer}: ${item}`);
});


// Listener 3: Delivery
tracker.on('delivered', (customer, item) => {
    console.log(`Order delivered to ${customer}: ${item}`);
});


// First order bonus
tracker.once('firstOrderBonus', (customer) => {
    console.log(`First-order bonus given to ${customer}!`);
});


// Error listener
tracker.on('error', (err) => {
    console.log(`Order error: ${err.message}`);
});


// First customer order
console.log('--- Order 1 ---');

tracker.emit('firstOrderBonus', 'Sayon');

tracker.placeOrder('Sayon', 'Pizza');


// Second order
setTimeout(() => {
    console.log('\n--- Order 2 ---');
    tracker.placeOrder('Aman', 'Burger');
}, 3500);


// Third order
setTimeout(() => {
    console.log('\n--- Order 3 ---');
    tracker.placeOrder('Priya', 'Pasta');
}, 7000);