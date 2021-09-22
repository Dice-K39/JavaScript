'use strict';

// Scopes

// function calcAge(birthYear)
// {
//     const age = 2037 - birthYear;

//     function printAge()
//     {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;

//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996)
//         {
//             var millenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName = "Steven";
//             // Reassigning outer scope's variable
//             output = "NEW OUTPUT!";
//             const str = `Oh, and you're a millenial, ${firstName}`;
            
//             console.log(str);

//             function add(a,b)
//             {
//                 return a + b;
//             }

//         }

//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }

//     printAge();

//     return age;
// }

// const firstName = "Dice-K";
// calcAge(1981);
// // console.log(age);
// // printAge();


// Hoisting

// variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Dice-K";
// let job = "programmer";
// const year = 1981;

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a,b)
// {
//     return a + b;
// }

// const addExpr = function(a, b)
// {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart()
// {
//     console.log("All products deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// this keyword

// console.log(this);

// const calcAge = function(birthYear)
// {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = (birthYear) =>
// {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1991);

// const dicek =
// {
//     year: 1981,
//     calcAge: function()
//     {
//         console.log(this)
//         console.log(2037 - this.year);
//     }
// }

// dicek.calcAge();

// const aruta =
// {
//     year: 2017
// }

// aruta.calcAge = dicek.calcAge;
// aruta.calcAge();

// const f = dicek.calcAge;


// Regular Functions and Arrow Functions

// var firstName = "Aruta";
const dicek =
{
    firstName: "Dice-K",
    year: 1981,
    calcAge: function()
    {
        console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this;
        // const isMillenial = function()
        // {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        // Solution 2
        const isMillenial = () =>
        {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial();
    },
    greet: () =>
    {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}

dicek.greet();
dicek.calcAge();

// arguments keyword
const addExpr = function (a, b)
{
    console.log(arguments);

    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => 
{
    console.log(arguments);
    return a + b;
}
addArrow(2, 5, 8);