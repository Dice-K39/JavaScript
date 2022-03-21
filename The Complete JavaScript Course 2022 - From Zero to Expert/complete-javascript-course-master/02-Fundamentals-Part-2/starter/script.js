"use strict";

console.log("------------ Lecture ------------");
/*
// Activating Strict Mode
// Always first line - helps in debugging
let hasDriversLicense = false;
const passTest = true;

if (passTest)
{
    hasDriverLicense = true;
}

if (hasDriversLicense)
{
    console.log("I can drive");
}

// reserved keywords in programming language
// const interface = "Audio";
// const private = 534;
// const if = 21;
/////////////////////////////////////////////////////////////////
// Functions
function logger()
{
    console.log("My name is Dice");
}

// calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
/////////////////////////////////////////////////////////////////
// Function Declarations vs Expressions
// Function declaration - can be hoisted
function calcAge1(birthYear)
{
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear)
{
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
/////////////////////////////////////////////////////////////////
// Arrow Functions
// Function expression
const calcAge2 = function (birthYear)
{
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>
{
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, "Dice"));
console.log(yearsUntilRetirement(1980, "Bob"));
/////////////////////////////////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit)
{
    return fruit * 4
}

function fruitProcessor(apples, oranges)
{
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    
    return juice;
}

console.log(fruitProcessor(2, 3));
/////////////////////////////////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear)
{
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName)
{
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0)
    {
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    }
    else
    {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, "Dice"));
console.log(yearsUntilRetirement(1950, "Mike"));
/////////////////////////////////////////////////////////////////
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Dice";
const dice = [firstName, "Hash", 2037 - 1991, "programmer", friends];
console.log(dice);
console.log(dice.length);

// Exercise
const calcAge = function (birthYear)
{
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
/////////////////////////////////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // returns length of new array
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); // returns popped element
console.log(popped);
console.log(friends);

friends.shift(); // // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // looks for strict equality
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven"))
{
    console.log("You have a friend called Steven");
}
/////////////////////////////////////////////////////////////////
// Introduction to Objects
const dice =
{
    firstName: "Dice",
    lastName: "Hash",
    age: 2037 - 1991,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"]
};
/////////////////////////////////////////////////////////////////
// Dot vs Bracket Notation
const dice =
{
    firstName: "Dice",
    lastName: "Hash",
    age: 2037 - 1991,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(dice);

console.log(dice.lastName);
console.log(dice["lastName"]);

const nameKey = "Name";
console.log(dice["first" + nameKey]);
console.log(dice["last" + nameKey]);

// console.log(dice."last" + nameKey);

const interestedIn = prompt("What do you want to know about Dice? Choose between firstName, lastName, age, job, and friends.");

if (dice[interestedIn])
{
    console.log(dice[interestedIn]);
}
else
{
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends.");
}

dice.location = "USA";
dice["twitter"] = "@diceexample";
console.log(dice);

// Challenge
// "Dice has 3 friends, and his best friend is called Michael"
console.log(`${dice.firstName} has ${dice.friends.length} friends, and his best friend is called ${dice.friends[0]}`);
/////////////////////////////////////////////////////////////////
// Object Methods
const dice =
{
    firstName: "Dice",
    lastName: "Hash",
    birthYear: 1991,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,
    // calcAge: function (birthYear)
    // {
    //     return 2037 - birthYear;
    // }
    // calcAge: function ()
    // {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function ()
    {
        this.age =  2037 - this.birthYear;
        return this.age;
    },
    challenge: function ()
    {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
};

console.log(dice.calcAge());

console.log(dice.age);
console.log(dice.age);
console.log(dice.age);

// Challenge
// "Dice is a 46-year old programmer, and he has a driver's license"
console.log(dice.challenge());
/////////////////////////////////////////////////////////////////
// Iteration: The for Loop
// console.log("Lifting weights repetition 1 🏋");
// console.log("Lifting weights repetition 2 🏋");
// console.log("Lifting weights repetition 3 🏋");
// console.log("Lifting weights repetition 4 🏋");
// console.log("Lifting weights repetition 5 🏋");
// console.log("Lifting weights repetition 6 🏋");
// console.log("Lifting weights repetition 7 🏋");
// console.log("Lifting weights repetition 8 🏋");
// console.log("Lifting weights repetition 9 🏋");
// console.log("Lifting weights repetition 10 🏋");

for (let rep = 1; rep <= 30; rep++)
{
    console.log(`Lifting weights repetition ${rep} 🏋`)
}
/////////////////////////////////////////////////////////////////
// Looping Arrays, Breaking, and Continuing
const diceArray =
[
    "Dice",
    "Hash",
    2037 - 1991,
    "programmer",
    ["Michael", "Peter", "Steven"],
    true
]
const types = [];

for (let i = 0; i < diceArray.length; i++)
{
    // Reading from dice array
    console.log(diceArray[i], typeof diceArray[i]);

    // Filling types array
    // types[i] = typeof diceArray[i];
    types.push(typeof diceArray[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++)
{
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- Only Strings ---")
for (let i = 0; i < diceArray.length; i++)
{
    if (typeof diceArray[i] !== "string")
    {
        continue;
    }
    console.log(diceArray[i], typeof diceArray[i]);
}

console.log("--- Break with Number ---")
for (let i = 0; i < diceArray.length; i++)
{
    if (typeof diceArray[i] === "number")
    {
        break;
    }
    console.log(diceArray[i], typeof diceArray[i]);
}
/////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
const diceArray =
[
    "Dice",
    "Hash",
    2037 - 1991,
    "programmer",
    ["Michael", "Peter", "Steven"],
    true
];

for (let i = diceArray.length - 1; i >= 0; i--)
{
    console.log(i, diceArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++)
{
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++)
    {
        console.log(`Exercise ${exercise}: Lifing weight repetition ${rep} 🏋 `);
    }
}
/////////////////////////////////////////////////////////////////
*/
// The while Loop
// for (let rep = 1; rep <= 10; rep++)
// {
//     console.log(`Lifting weights repetition ${rep} 🏋`)
// }

let rep = 1;
while (rep <= 10)
{
    // console.log(`Lifting weights repetition ${rep} 🏋`)

    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6)
{
    console.log(`You rolled a ${dice}`);
    
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6)
    {
        console.log(`You rolled a ${dice}. Loop is about to end...`);

        break;
    }
}