function placeOrder(item) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            resolve(`${item} order completed`);
        }, delay);
    });
}

async function orderMultiple() {
    console.log("Placing 3 orders at once...");

    console.time("Total Time");

    const results = await Promise.all([
        placeOrder("Pizza"),
        placeOrder("Burger"),
        placeOrder("Coffee")
    ]);

    console.timeEnd("Total Time");

    console.log(results);
}

orderMultiple();