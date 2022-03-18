"use strict";

console.log("------------ Lecture ------------");
/*
// Activating Strict Mode
// Always first line - helps in debugging
let hasDriversLicense = false;
const passTest = true;

if (passTest)
{
    hasDriverLicense = true;
}

if (hasDriversLicense)
{
    console.log("I can drive");
}

// reserved keywords in programming language
// const interface = "Audio";
// const private = 534;
// const if = 21;
/////////////////////////////////////////////////////////////////
*/
// Functions
function logger()
{
    console.log("My name is Dice");
}

// calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");