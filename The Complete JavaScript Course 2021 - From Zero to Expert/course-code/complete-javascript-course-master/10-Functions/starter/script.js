'use strict';

/*
/////////////////////////////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers)
{
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking =
    {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);

createBooking("LH234", undefined, 1000);
/////////////////////////////////////////////////////////////
*/

/*
/////////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs Reference

const flight = "LH234";
const dicek =
{
    name: "Dice-K Hash",
    passport: 1234567890
}

const checkIn = function(flightNum, passenger)
{
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 1234567890)
    {
        alert("Checked in");
    }
    else
    {
        alert("Wrong passport");
    }
}

// checkIn(flight, dicek);
// console.log(flight);
// console.log(dicek);

// Is the same as doing...
// const flightNum = flight;
// const passenger = dicek;

const newPassport = function(person)
{
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(dicek);
checkIn(flight, dicek);
/////////////////////////////////////////////////////////////
*/

/*
/////////////////////////////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function(str)
{
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str)
{
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn)
{
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function()
{
    console.log('👋')
}
document.body.addEventListener("click", high5);

["Dice-K", "Martha", "Adam"].forEach(high5);
/////////////////////////////////////////////////////////////
*/

/////////////////////////////////////////////////////////////
// Functions Returning Functions

const greet = function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet("Hey");
greeterHey("Dice-K");
greeterHey("Steven");

greet("Hello")("Dice-K");

// Challenge
const greet2 = (greeting) =>
{
    return (name) =>
    {
        console.log(`${greeting} ${name}`);
    };
}

const greeting = greet2("Hello THE WARUDO!");
greeting("Dice-K");
/////////////////////////////////////////////////////////////