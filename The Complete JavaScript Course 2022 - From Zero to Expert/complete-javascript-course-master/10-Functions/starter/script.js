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
/////////////////////////////////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey("Dice");
greeterHey("Steven");

greet("Hello")("Dice");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Dice");
/////////////////////////////////////////////////////////////////
// The call and apply Methods
const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(123, "Dice Hash");
lufthansa.book(890, "John Smith");

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams");

// call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23); // partial application
bookEW23("Dice Hash");
bookEW23("Martha Cooper");

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
/////////////////////////////////////////////////////////////////
*/
// Immediately Invoked Function Expression (IIFE)
const runOnce = function () {
    console.log("This will never run again");
};
runOnce();

(function () {
    console.log("This will never run again");
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
    const isPrivate = 23;
    var notPrivate = 23;
}
// console.log(isPrivate);
console.log(notPrivate);
