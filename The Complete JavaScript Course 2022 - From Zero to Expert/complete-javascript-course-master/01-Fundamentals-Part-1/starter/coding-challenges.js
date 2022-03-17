console.log("------------ Coding Challenges ------------");
// #1
console.log("---- #1 ----");
// Test Data 1
// const markMass = 78; 
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// Test Data 2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// #2
console.log("---- #2 ----");
if (markBMI > johnBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`)
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)

}

// #3
console.log("---- #3 ----");
const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 106) / 3;
const minimumScore = 100;

console.log(dolphinsAverageScore, koalasAverageScore)

if ((dolphinsAverageScore > koalasAverageScore) && dolphinsAverageScore >= minimumScore)
{
    console.log("Dolphins wins a trophy! 🏆 ");
}
else if ((dolphinsAverageScore < koalasAverageScore) && koalasAverageScore >= minimumScore)
{
    console.log("Koalas wins a trophy! 🏆 ");
}
else if ((dolphinsAverageScore === koalasAverageScore) && dolphinsAverageScore >= minimumScore && koalasAverageScore >= minimumScore)
{
    console.log("It is a draw.");
}
else
{
    console.log("No one wins the trophy.");
}

// #4
console.log("---- #4 ----");
const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

console.log(`The bill was \$${bill}, the tip was \$${tip}, and the total value is \$${bill + tip}.`);