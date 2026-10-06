function placeOrderCallback(item, callback) {
    console.log(`Order placed: ${item}`);

    setTimeout(() => {
        callback(`${item} is out for delivery!`);
    }, 2000);
}

function trackOrderCallback(item, callback) {
    console.log(`Tracking order: ${item}`);

    setTimeout(() => {
        callback(`${item} has reached the delivery area!`);
    }, 2000);
}

function confirmDeliveryCallback(item, callback) {
    console.log(`Confirming delivery: ${item}`);

    setTimeout(() => {
        callback(`${item} has been delivered successfully!`);
    }, 2000);
}

// Nested callbacks
placeOrderCallback("Pizza", (message) => {
    console.log(message);

    trackOrderCallback("Pizza", (message) => {
        console.log(message);

        confirmDeliveryCallback("Pizza", (message) => {
            console.log(message);
        });
    });
});