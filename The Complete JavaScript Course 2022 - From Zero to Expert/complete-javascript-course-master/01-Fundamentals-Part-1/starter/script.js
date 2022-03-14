/*
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
*/