"use strict";

/*
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
/////////////////////////////////////////////////////////////////
// Function Declarations vs Expressions
function percentageOfWorld1(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}

const usa1 = percentageOfWorld1(323);
const japan1 = percentageOfWorld1(125.8);
const canada1 = percentageOfWorld1(38.01);
const china1 = percentageOfWorld1(1441);

console.log(usa1);
console.log(japan1);
console.log(canada1);
console.log(china1);

const percentageOfWorld2 = function(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}

const usa2 = percentageOfWorld1(323);
const japan2 = percentageOfWorld1(125.8);
const canada2 = percentageOfWorld1(38.01);
const china2 = percentageOfWorld1(1441);

console.log(usa2);
console.log(japan2);
console.log(canada2);
console.log(china2);
/////////////////////////////////////////////////////////////////
// Arrow Functions
const percentageOfWorld3 = (population) => Number(((population / 7900) * 100).toFixed(2));

const usa = percentageOfWorld3(323);
const japan = percentageOfWorld3(125.8);
const canada = percentageOfWorld3(38.01);
const china = percentageOfWorld3(1441);

console.log(usa);
console.log(japan);
console.log(canada);
console.log(china);
/////////////////////////////////////////////////////////////////
// Functions Calling Other Functions
function percentageOfWorld(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld(population)} of the world.`;

console.log(describePopulation("USA", 323));
console.log(describePopulation("Japan", 125.8));
console.log(describePopulation("Canada", 38.01));
/////////////////////////////////////////////////////////////////
// Introduction to Arrays
const populations = [323, 125.8, 38.01, 1441];
console.log(populations.length === 4);
function percentageOfWorld1(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);
/////////////////////////////////////////////////////////////////
const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany"))
{
    console.log("Probably not a central European country");
}

neighbors[neighbors.indexOf("Canada")] = "Adanac";
console.log(neighbors);
/////////////////////////////////////////////////////////////////
// Introduction to Objects
const myCountry =
{
    country: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    population: 125.8,
    neighbors: ["South Korea", "China", "Taiwan"]
};
/////////////////////////////////////////////////////////////////
// Dot vs Bracket Notation
const myCountry =
{
    country: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    population: 125.8,
    neighbors: ["South Korea", "China", "Taiwan"]
};
console.log(`${myCountry.country} has ${myCountry["population"]} million ${myCountry.language}-speaking people, ${myCountry["neighbors"].length} neighboring countries, and a capital called ${myCountry.capital}.`);
/////////////////////////////////////////////////////////////////
// Object Methods
const myCountry =
{
    country: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    population: 125.8,
    neighbors: ["South Korea", "China", "Taiwan"],
    describe: function()
    {
        console.log(`${this.country} has ${this["population"]} million ${this.language}-speaking people, ${this["neighbors"].length} neighboring countries, and a capital called ${this.capital}.`);
    },
    checkIsland: function ()
    {
        this.isIsland = this.neighbors.length === 0 ? true : false;
        return this.isIsland;
    }
};
myCountry.describe();
console.log(myCountry.checkIsland());
/////////////////////////////////////////////////////////////////
// Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++)
{
    console.log(`Voter number ${voter} is currently voting`);
}
/////////////////////////////////////////////////////////////////
// Looping Arrays, Breaking, and Continuing
const populations = [323, 125.8, 38.01, 1441];
const percentages = [];

function percentageOfWorld1(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}

for (let i = 0; i < populations.length; i++)
{
    percentages.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
/////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
const listOfNeighbors = 
[
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
]

for (let neighbors = 0; neighbors < listOfNeighbors.length; neighbors++)
{
    for (let country = 0; country < listOfNeighbors[neighbors].length; country++)
    {
        console.log(`Neighbor: ${listOfNeighbors[neighbors][country]}`)
    }
}
/////////////////////////////////////////////////////////////////
// The while Loop
const populations = [323, 125.8, 38.01, 1441];
const percentages3 = [];

function percentageOfWorld1(population)
{
    return Number(((population / 7900) * 100).toFixed(2));
}

let counter = 0;

while (counter < populations.length)
{
    percentages3.push(percentageOfWorld1(populations[counter]));

    counter++;
}

console.log(percentages3);
/////////////////////////////////////////////////////////////////
*/
