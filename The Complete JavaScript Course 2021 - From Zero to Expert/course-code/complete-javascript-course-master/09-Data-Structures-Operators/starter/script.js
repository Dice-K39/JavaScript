'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex)
  {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address })
  {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3)
  {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },
  orderPizza(mainIngredient, ...otherIngredients)
  {
    console.log(mainIngredient);
    console.log(otherIngredients)
  }
};

const rest = new Map();
rest.set("name", "Classico Italiano"); // similar to add method to Set
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set("open", 11).set("close", 23).set(true, "We are open.").set(false, "We are closed.");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test")
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


/*
//////////////////////////////////////////////////////////////////////////////
// Sets
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);

console.log(new Set("Dice-K"));

console.log(ordersSet.size); // checks how many unique values are in the set
console.log(ordersSet.has("Pizza")); // checks if arguemnt is in the set, same as includes in arrays
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread"); // adds to the set
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto"); // deletes selected
// ordersSet.clear(); // clears the whole set
console.log(ordersSet);

for (const order of ordersSet)
{
  console.log(order);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size)

console.log(new Set("dice-k").size);
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Looping Objects: Keys, Values, and Entries
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours))
{
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries)
{
  console.log(`On ${key} we pen at ${open} and close at ${close}`);
}
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Optional Chaning
if (restaurant.openingHours && restaurant.openingHours.mon)
{
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.mon.open);

const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for (const day of days)
{
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0,1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0,1) ?? "Method does not exist");

const users =
[
  {
    name: "Dice-K",
    email: "dicek@example.com"
  }
]
console.log(users[0]?.name ?? "User array empty");
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu)
{
  console.log(item);
}

for (const [i, el] of menu.entries())
{
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)

console.log("---- OR ----");
// Use any data type, return any data type, short-circuiting
console.log(3 || "Dice-K");
console.log("" || "Dice-K");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests: 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
console.log(0 && "Dice-K");
console.log(7 && "Dice-K");

console.log("Hello" && 23 && null && "Dice-K");

if(restaurant.orderPizza)
{
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Spread and Rest operators

// 1. Destructuring

// SPREAD - used on right side of assignment
const arr = [1, 2, ...[3, 4]];

// REST - used on left side of assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ... restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function(...numbers)
{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterableds: arrays, strings, maps, sets. NOT objects
const str = "Dice-K";
const letters = [...str, ' ', "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Hashimogo`);

// Real-world example
const ingredients = 
[
  // prompt("Let\'s make pasta! Ingredient 1?"), 
  // prompt("Ingredient 2?"), 
  // prompt("Ingredient 3?")
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {...restaurant, founder: "Mozart", foundedIn: 1998}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery(
  {
    time: "22:30",
    address: "123 Here St",
    mainIndex: 2,
    starterIndex: 2
  }
)

restaurant.orderDelivery(
  {
    address: "321 There St",
    starterIndex: 1
  }
)

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({a, b} = obj);
console.log(a, b);

// Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
//////////////////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log([x, y, z]);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const[i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
//////////////////////////////////////////////////////////////////////////////
*/