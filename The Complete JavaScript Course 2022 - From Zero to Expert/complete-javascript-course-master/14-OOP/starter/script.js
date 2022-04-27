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

Person.hey = function () {
	console.log('Hey there 👋');
	console.log(this);
};
Person.hey();
/////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////
// 213 - ES6 Classes
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Methods will be added to .prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	// Instance methods
	// Set a property that already exists
	set fullName(name) {
		if (name.includes(' ')) {
			this._fullName = name;
		} else {
			alert(`${name} is not a full name`);
		}
	}

	get fullName() {
		return this._fullName;
	}

	// Static method
	static hey() {
		console.log('Hey there 👋');
		console.log(this);
	}
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// 	console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1 Classes are NOT hoisted
// 2 Classes are first-class citizens
// 3 Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
/////////////////////////////////////////////////////////////////
// 214 - Setters and Getters
const account = {
	owner: 'dice',
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},
	set latest(mov) {
		this.movements.push(mov);
	}
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
