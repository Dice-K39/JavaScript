'use strict';

console.log('--------------- Coding Challenge ---------------');
/*
// Coding Challenge 1
// 1
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

// 2
Car.prototype.accelerate = function () {
	console.log((this.speed += 10));
};

// 3
Car.prototype.brake = function () {
	console.log((this.speed -= 5));
};
// 4
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
/////////////////////////////////////////////////////////////////
// Coding Challenge 2
// 1
class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		console.log(`The ${this.make} increased its speed to ${(this.speed += 10)} km/h.`);
	}

	brake() {
		console.log(`The ${this.make} decreased its speed to ${(this.speed -= 5)} km/h`);
	}

	// 2
	get speedUS() {
		return this.speed / 1.6;
	}

	// 3
	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}
// 4
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
/////////////////////////////////////////////////////////////////
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	console.log((this.speed += 10));
};

Car.prototype.brake = function () {
	console.log((this.speed -= 5));
};

// Coding Challenge 3
// 1
const EV = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

// 2
EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
};

// 3
EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`);
};

// 4
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.brake();
tesla.accelerate();
/////////////////////////////////////////////////////////////////
*/
