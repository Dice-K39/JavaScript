// Challenge 1
const bmiCalculator = (mass, height) =>
{
    return mass / (height ** 2)
}

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = bmiCalculator(markMass, markHeight);
const johnBMI = bmiCalculator(johnMass, johnHeight);

// console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// Challenge 2
if (markHigherBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`)
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}