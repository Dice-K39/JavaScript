"use strict";
/*
// Scoping in Practice
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;

        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = "Steven";

            // Reassigning outer scope's variable
            output = "NEW OUTPUT!";

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = "Dice";
calcAge(1991);
// console.log(age);
// printAge();
/////////////////////////////////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Dice";
let job = "programmer";
const year = 1991;

// Functions
console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDeclaration(a, b) {
    return a + b;
}

const addExpression = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);

if (!numProducts) {
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
/////////////////////////////////////////////////////////////////
*/
// The this Keyword in Practice
// console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAgeArrow(1980);

const dice = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
dice.calcAge();

const paul = {
    year: 2017,
};

paul.calcAge = dice.calcAge;
paul.calcAge();

const f = dice.calcAge;
f();
