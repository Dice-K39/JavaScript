"use strict";

console.log("--------------- Coding Challenge ---------------");
/*
// Coding Challenge 1
const checkDogs = function(dogsJulia, dogsKate) 
{
    const onlyDogs = dogsJulia.slice(1, 3);
    const combined = [...onlyDogs, ...dogsKate];

    combined.forEach(function(age, i)
    {
        const str = age >= 3 ? `Dog number ${ i + 1 } is an adult, and is ${ age } years old` :
            `Dog number ${ i + 1 } is still a puppy`;

        console.log(str);
    });
}

const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);
/////////////////////////////////////////////////////////////////
*/
// Coding Challenge 2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(ages) {
    const dogAgesInHumanYears = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4);
    const excludeYoungDogs = dogAgesInHumanYears.filter((humanAge) => humanAge >= 18);
    const averageHumanAge = excludeYoungDogs.reduce((acc, dogAge) => acc + dogAge, 0) / excludeYoungDogs.length;

    return averageHumanAge;
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));