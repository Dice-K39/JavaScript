// Function
const describeCountry = (country, population, capitalCity) =>
{
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("USA", 368, "Washington D.C."));
console.log(describeCountry("Japan", 200, "Tokyo"));
console.log(describeCountry("France", 300, "Paris"));

// Function Declarations vs. Expressions
// Arrow Functions
const percentageOfWorld1 = (population) =>
{
    return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(300);
const population2 = percentageOfWorld1(100);
const population3 = percentageOfWorld1(500);

console.log(population1, population2, population3);

const percentageOfWorld2 = (population) =>
{
    return (population / 7900) * 100;
}

const population4 = percentageOfWorld2(300);
const population5 = percentageOfWorld2(100);
const population6 = percentageOfWorld2(500);

console.log(population4, population5, population6);

// Functions Calling Other Functions
const describePopulation = (country, population) =>
{
    const percentage = percentageOfWorld1(population);

    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation("USA", 500));
console.log(describePopulation("Japan", 300));
console.log(describePopulation("China", 700));