"use strict";

console.log("--------------- Lecture ---------------");

/*
/////////////////////////////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers ||= 1;
    // price ||= 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("ABC123");
createBooking("XYZ098", 2, 800);
createBooking("ABC123", 2);
createBooking("ABC123", 5);
createBooking("ABC123", undefined, 1000);
/////////////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs Reference
const flight = "ABC123";
const dice = {
    name: "Dice Hash",
    passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "XYZ098";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 1234567890) {
        alert("Checked in");
    } else {
        alert("Wrong passport");
    }
};

// checkIn(flight, dice);
// console.log(flight);
// console.log(dice);

// Is the same as doing...
// const flightNum = flight;
// const passenger = dice;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(dice);
checkIn(flight, dice);
/////////////////////////////////////////////////////////////////
*/
// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log("👋");
};
document.addEventListener("click", high5);
["Dice", "Martha", "Adam"].forEach(high5);
