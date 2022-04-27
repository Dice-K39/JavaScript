'use strict';

console.log('--------------- Lecture ---------------');
/*
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
/////////////////////////////////////////////////////////////////
// 216 - Object.create
const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/
/////////////////////////////////////////////////////////////////
// 218 - Inheritance Between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
	Person.call(this, firstName, birthYear);
	this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
