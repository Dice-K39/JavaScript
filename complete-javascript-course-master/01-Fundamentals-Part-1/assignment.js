// Values and Variables
const country = "USA";
const continent = "North America";
let population = 328.2;

console.log(country, continent, population);

// Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const. and var
language = "English";

// Basic Operators
// population /= 2;
// console.log(population++);

let finland = 6;
console.log(population > finland);
console.log(33 < population);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

//Strings and Template Literals
description = `${country} is in ${continent},
 and its ${population} million people speak ${language}`;
console.log(description)

// Taking Decisions: if/else Statements
if (population > 33)
{
    console.log(`${country}'s population is above average.`);
}
else
{
    console.log(`${country}'s population is ${population - 33} million below average.`);
}