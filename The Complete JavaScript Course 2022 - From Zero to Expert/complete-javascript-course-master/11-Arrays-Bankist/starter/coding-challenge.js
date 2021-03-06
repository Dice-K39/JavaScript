'use strict';

console.log('--------------- Coding Challenge ---------------');
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
/////////////////////////////////////////////////////////////////
// Coding Challenge 3
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogAges) => dogAges.map((age) => age <= 2 ? 2 * age : 16 + age * 4)
        .filter((humanAge) => humanAge >= 18)
        .reduce((acc, dogAge, _, arr) => acc + dogAge / arr.length, 0);
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
/////////////////////////////////////////////////////////////////
// Coding Challenge 4
const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1
dogs.forEach((dog) => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
	`Sarah's dog is eating ${
		dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
	}`
);
// dogs.forEach((dog) =>
// 	dog.owners.find(function (owner) {
// 		if (owner === 'Sarah') {
// 			if (
// 				dog.curFood > dog.recommendedFood * 0.9 &&
// 				dog.curFood < dog.recommendedFood * 1.1
// 			) {
// 				console.log("Sarah's dog is eating just enough");
// 			} else if (dog.curFood < dog.recommendedFood * 0.9) {
// 				console.log("Sarah's dog is eating too little");
// 			} else if (dog.curFood > dog.recommendedFood * 1.1) {
// 				console.log("Sarah's dog is eating too much");
// 			}
// 		}
// 	})
// );

// 3
const ownersEatTooMuch = dogs
	.filter((dog) => dog.curFood > dog.recommendedFood)
	.flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
	.filter((dog) => dog.curFood < dog.recommendedFood)
	.flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5
console.log(dogs.some((dog) => dog.recommendedFood === dog.curFood));

// 6
const recommendedPortion = (dog) =>
	dog.curFood > dog.recommendedFood * 0.9 &&
	dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some((dog) => recommendedPortion(dog)));

// 7
const goodAmount = dogs.filter((dog) => recommendedPortion(dog));
console.log(goodAmount);

// 8
const dogsCopy = dogs.slice();
console.log(dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood));
/////////////////////////////////////////////////////////////////
*/
