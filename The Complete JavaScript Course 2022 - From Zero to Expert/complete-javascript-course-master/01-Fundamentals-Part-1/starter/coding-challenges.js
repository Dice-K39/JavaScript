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

console.log("---- #2 ----");
if (markBMI > johnBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`)
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)

}