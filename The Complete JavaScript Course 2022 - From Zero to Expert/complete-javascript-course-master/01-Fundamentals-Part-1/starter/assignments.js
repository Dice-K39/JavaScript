console.log("------------ Assignments ------------")
// Values and Variables
const country = "USA";
const continent = "North America";
let population = 323;

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
// const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

// if (numNeighbors === 1)
// {
//     console.log("Only 1 border!");
// }
// else if (numNeighbors >= 2)
// {
//     console.log("More than 1 border!");
// }
// else
// {
//     console.log("No borders.");
// }
/////////////////////////////////////////////////////////////////
// Logical Operators
if (language === "English" && population < 50 && !isIsland)
{
    console.log(`You should live in ${country}.`);
}
else
{
    console.log(`${country} does not meet your criteria.`);
}
/////////////////////////////////////////////////////////////////
// The switch Statement
switch (language)
{
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too");
        break;
}