"use strict";

console.log("--------------- Lecture ---------------");

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
