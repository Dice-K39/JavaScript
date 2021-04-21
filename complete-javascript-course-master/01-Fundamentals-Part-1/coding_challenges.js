// Challenge 1
const bmiCalculator = (mass, height) =>
{
    return mass / (height ** 2)
}

const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = bmiCalculator(markMass1, markHeight1);
const johnBMI1 = bmiCalculator(johnMass1, johnHeight1);
const markBMI2 = bmiCalculator(markMass2, markHeight2);
const johnBMI2 = bmiCalculator(johnMass2, johnHeight2);

console.log(markBMI1, johnBMI1);
console.log(markBMI2, johnBMI2);

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markHigherBMI1);
console.log(markHigherBMI2);