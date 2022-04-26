'use strict';

console.log('--------------- Lecture ---------------');
/////////////////////////////////////////////////////////////////
// 208 - Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
	// Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never do this
	// this.calcAge = function() {
	//     console.log(2037 - this.birthYear);
	// }
};

const dice = new Person('Dice', 1991);
console.log(dice);

// 1 New {} is created
// 2 function is called, this = {}
// 3 {} linked to prototype
// 4 function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(dice instanceof Person);

// 209 - Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

dice.calcAge();
matilda.calcAge();

console.log(dice.__proto__);
console.log(dice.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(dice));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(dice.species, matilda.species);

console.log(dice.hasOwnProperty('firstName'));
console.log(dice.hasOwnProperty('species'));
/////////////////////////////////////////////////////////////////
// 211 - Prototypal Inheritance on Built-In Objects
console.log(dice.__proto__);
// Object.prototype (top of prototype chain)
console.log(dice.__proto__.__proto__);
console.log(dice.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 5, 6, 9, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir((x) => x + 1);
