/*
console.log("------------ Lecture ------------");
/////////////////////////////////////////////////////////////////
// Values and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Dice");
console.log(23);

let firstName = "Ash";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let dice_hash = "DH";
let $function = 27;

let person = "dice";
let PI = 3.1415;

let myFirstJob = "Sales Rep";
let myCurrentJob = "Programmer";

let job1 = "sales rep";
let job2 = "programmer";

console.log(myFirstJob);
/////////////////////////////////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Dice");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
/////////////////////////////////////////////////////////////////
// let, const, and var
let age = 30;
age = 31;

const birthYear = 1991; // immutable
// birthYear = 1990;
// const job;

var job = "sales rep";
job = "programmer";

lastName = "Hash";
console.log(lastName);
/////////////////////////////////////////////////////////////////
// Basic Operators

// Math operators
const now = 2037
const ageDice = now - 1991;
const ageSarah = now - 2018;
console.log(ageDice, ageSarah);

console.log(ageDice * 2, ageDice / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, 2 * 2 * 2

const firstName = "Dice";
const lastName = "Hash";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageDice > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
/////////////////////////////////////////////////////////////////
// Operator Precedence
const now = 2037
const ageDice = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageDice + ageSarah) / 2;
console.log(ageDice, ageSarah, averageAge);
/////////////////////////////////////////////////////////////////
// Strings and Template Literals
const firstName = "Dice";
const job = "programmer";
const birthYear = 1991;
const year = 2037;

const dice = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + '!';
console.log(dice);

const diceNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(diceNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines")

console.log(`String with
multiple
lines`)
/////////////////////////////////////////////////////////////////
// Taking Decisions: if/else Statements
const age = 15;

if (age >= 18)
{
    console.log("Sarah can start driving license 🚗");
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}
console.log(century);
/////////////////////////////////////////////////////////////////
// Type Conversion and Coercion

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Dice"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * '2');
console.log("23" / '2');

let n = '1' +1; // "11"
n = n - 1;
console.log(n);
/////////////////////////////////////////////////////////////////
// Truthy and Falsy Values
// falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Dice"));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money)
{
    console.log("Don't spend it all.");
}
else
{
    console.log("You should get a job!");
}

let height = 123;
if(height)
{
    console.log("Height is defined");
}
else
{
    console.log("Height is UNDEFINED");
}
/////////////////////////////////////////////////////////////////
// Equality Operators: == vs ===
const age = "18";
if (age === 18)
{
    console.log("You just became an adult (strict)");
}

if (age == 18)
{
    console.log("You just became an adult (loose)");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23)
{
    console.log("Cool! 23 is an amazing number!");
}
else if (favorite === 7)
{
    console.log("7 is also a cool number");
}
else if (favorite === 9)
{
    console.log("9 is also a cool number");
}
else
{
    console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23)
{
    console.log("Why not 23?");
}
/////////////////////////////////////////////////////////////////
// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision)
// {
//     console.log("Sarah is able to drive!");
// }
// else
// {
//     console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired)
{
    console.log("Sarah is able to drive!");
}
else
{
    console.log("Someone else should drive...");
}
/////////////////////////////////////////////////////////////////
// The switch Statement
const day = "friday";

switch (day)
{
    case "monday":
        console.log("Plan weekly schedule");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Take a break");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("End of the work week");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}

if (day === "monday")
{
    console.log("Plan weekly schedule");
    console.log("Go to coding meetup");
}
else if (day === "tuesday")
{
    console.log("Take a break");
}
else if (day === "wednesday" || day === "thursday")
{
    console.log("Write code examples");
}
else if (day === "friday")
{
    console.log("End of the work week");
}
else if (day === "saturday" || day === "sunday")
{
    console.log("Enjoy the weekend");
}
else
{
    console.log("Not a valid day");
}
/////////////////////////////////////////////////////////////////
// Statements and Expressions

// expressions - produces a value
3 + 4
1991
true && false && !false

// statement - produce no value
if (23 > 10)
{
    const str = "23 is bigger";
}

const me = "Dice";
console.log(`I'm ${2037 - 1991} years old ${me}`);
/////////////////////////////////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log("I like to drink wine 🍷 ") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18)
{
    drink2 = "wine 🍷";
}
else
{
    drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
