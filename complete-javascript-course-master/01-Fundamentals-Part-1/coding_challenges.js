// Challenge 1
// const bmiCalculator = (mass, height) =>
// {
//     return mass / (height ** 2)
// }

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = bmiCalculator(markMass, markHeight);
// const johnBMI = bmiCalculator(johnMass, johnHeight);

// // console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// Challenge 2
// if (markHigherBMI)
// {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`)
// }
// else
// {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }

// Challenge 3
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;

// if (dolphins > koalas && dolphins >= 100)
// {
//     console.log("Dolphins wins a trophy!");
// }
// else if (koalas > dolphins && koalas >= 100)
// {
//     console.log("Koalas wins a trophy!");
// }
// else if (dolphins === koalas && dolphins >= 100 && koalas >= 100)
// {
//     console.log("The competition is a draw.");
// }
// else
// {
//     console.log("No team wins the trophy.");
// }

// Challenge 4
const bill = 275;//40 430
const tip = (bill >= 50 && bill < 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);