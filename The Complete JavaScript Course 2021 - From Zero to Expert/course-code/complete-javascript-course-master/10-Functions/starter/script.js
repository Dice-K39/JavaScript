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