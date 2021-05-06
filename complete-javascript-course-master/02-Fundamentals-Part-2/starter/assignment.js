const describeCountry = (country, population, capitalCity) =>
{
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("USA", 368, "Washington D.C."));
console.log(describeCountry("Japan", 200, "Tokyo"));
console.log(describeCountry("France", 300, "Paris"));