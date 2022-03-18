"use strict";

console.log("------------ Assignment ------------");
/*
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
/////////////////////////////////////////////////////////////////
*/
// Function Declarations vs Expressions
function percentageOfWorld1(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}

const usa = percentageOfWorld1(323);
const japan = percentageOfWorld1(125.8);
const canada = percentageOfWorld1(38.01);
const china = percentageOfWorld1(1441);

console.log(usa);
console.log(japan);
console.log(canada);
console.log(china);