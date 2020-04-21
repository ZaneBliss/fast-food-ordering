const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function(meal) {
        this.orders.push(meal);
    },
    getOrders: function() { 
        return this.orders;
    },
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}
const giantBurger = {
    sandwichType: "hamburger",
    fries: false,
    drinkSize: "small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(giantBurger);


// Invoke the function to return the list of all orders
const table = restaurant.getOrders();

// Output all orders to the console using console.table()
console.log(table);
