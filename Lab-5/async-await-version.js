function placeOrder(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order Placed: ${item}`);
            resolve(item);
        }, 1000);
    });
}

function trackOrder(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Preparing: ${item}`);
            resolve(item);
        }, 1000);
    });
}

function confirmDelivery(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Out for Delivery: ${item}`);
            resolve(item);
        }, 1000);
    });
}

async function processOrder() {
    try {
        const item = await placeOrder("Pasta");
        await trackOrder(item);
        await confirmDelivery(item);

        console.log(`Delivered: ${item}`);
    } catch (error) {
        console.log(`Order failed: ${error}`);
    }
}

processOrder();