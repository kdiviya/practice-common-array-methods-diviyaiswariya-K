//Task 1: Create the Order System
let orders = [
    ["Latte", "Tea", "Expresso"], 
    ["Croissant", "Muffin", "Bagel"]
];

//Task 2: Log the number of drinks and number of pastries by using .length on each row.
let drinksCount = orders[0].length;
console.log("Number of drinks:", drinksCount);
let pastriesCount = orders[1].length
console.log("Number of pastries:", pastriesCount);

//Task 3: Access Orders Using Bracket Notation
console.log("Order 1:", orders[0][0], "&", orders[1][0]);
console.log("Order 2:", orders[0][1], "&", orders[1][1]);
console.log("Order 3:", orders[0][2], "&", orders[1][2]);

//Task 4: Access Orders Dynamically with Variables
let drinksRow = 0;
let pastriesRow = 1;
for (let i =0; i < drinksCount; i++){
    console.log("Order ", i+1, ":", orders[drinksRow][i], "&", orders[pastriesRow][i]);
    }

//Task 5: Write a loop that logs all the items in the drink category, ensuring the loop dynamically adjusts to the number of items using .length.
console.log("Drinks:");
for (let index = 0; index<drinksCount; index++){
    console.log(orders[drinksRow][index]);
}

//Task 6: Add a New Order & Track Length
let addDrink = orders[drinksRow].push("flat white");
console.log("Updated order list:", orders);
console.log("Updated drinks count:",addDrink);

let orderIndex = addDrink - 1;
let newOrder = orders[drinksRow][orderIndex];
console.log("New Order:",newOrder);