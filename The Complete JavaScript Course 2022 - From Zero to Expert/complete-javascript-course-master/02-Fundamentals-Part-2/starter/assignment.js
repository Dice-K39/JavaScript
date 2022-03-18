"use strict";

console.log("------------ Assignment ------------");
// Functions
function describeCountry(country, population, capitalCity)
{
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const usa = describeCountry("USA", 323, "Washington DC");
const japan = describeCountry("Japan", 125.8, "Tokyo");
const canada = describeCountry("Canada", 38.01, "Ottawa");

console.log(usa);
console.log(japan);
console.log(canada);