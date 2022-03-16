console.log("------------ Assignments ------------")
// Values and Variables
const country = "USA";
const continent = "North America";
let population = 332;

console.log(country, continent, population);
/////////////////////////////////////////////////////////////////
// Data Types
const isIsland = false;
let language;

console.log(isIsland, population, country, language);
/////////////////////////////////////////////////////////////////
// let, const, and var
language = "English";
// isIsland = true;
/////////////////////////////////////////////////////////////////
// Basic Operators
console.log(population / 2);
console.log(population + 1);

const finlandPopulation = 6;
console.log(population > finlandPopulation);
const averagePopulation = 33
console.log(population < averagePopulation);
// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language.;
/////////////////////////////////////////////////////////////////
// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);
/////////////////////////////////////////////////////////////////
// Equality Operators: == vs ===
const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1)
{
    console.log("Only 1 border!");
}
else if (numNeighbors >= 2)
{
    console.log("More than 1 border!");
}
else
{
    console.log("No borders.");
}