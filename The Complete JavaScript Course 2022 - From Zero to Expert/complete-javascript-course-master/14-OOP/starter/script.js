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
/////////////////////////////////////////////////////////////////
// 220 - Inheritance Between "Classes": ES6 Classes
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
	}
}

class StudentCl extends PersonCl {
	constructor(fullName, birthYear, course) {
		super(fullName, birthYear); // Need to happen first
		this.course = course; // Won't be able to use this if super isn't first
	}

	introduce() {
		console.log(`My name is ${this.fullName} and I study ${this.course}`);
	}

	calcAge() {
		console.log(
			`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${
				2037 - this.birthYear + 10
			}`
		);
	}
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
/////////////////////////////////////////////////////////////////
// 221 - Inheritance Between "Classes": Object.create
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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
	PersonProto.init.call(this, firstName, birthYear);
	this.course = course;
};

StudentProto.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
/////////////////////////////////////////////////////////////////
// 222 - Another Class Example
class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];

		this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	// Public interface
	getMovements() {
		return this.movements;
	}

	deposit(value) {
		this.movements.push(value);
	}

	withdraw(value) {
		this.deposit(-value);
	}

	approveLoan(value) {
		return true;
	}

	requestLoan(value) {
		if (this.approveLoan(value)) {
			this.deposit(value);
			console.log('Loan approved');
		}
	}
}

const acc1 = new Account('Dice', 'USD', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);
/////////////////////////////////////////////////////////////////
// 223 - Encapsulation: Protected Properties and Methods
class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		// Protected property
		this._pin = pin;
		this._movements = [];

		this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	// Public interface
	getMovements() {
		return this._movements;
	}

	deposit(value) {
		this._movements.push(value);
	}

	withdraw(value) {
		this.deposit(-value);
	}

	_approveLoan(value) {
		return true;
	}

	requestLoan(value) {
		if (this._approveLoan(value)) {
			this.deposit(value);
			console.log('Loan approved');
		}
	}
}

const acc1 = new Account('Dice', 'USD', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);
/////////////////////////////////////////////////////////////////
*/
// 224 - Encapsulation: Private Properties and Methods
// Public fields and methods
// Private fields and methods
// Static fields and methods
class Account {
	// Public fields (instances)
	locale = navigator.language;

	// Private fields
	#movements = [];
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	// Public methods/interfaces
	getMovements() {
		return this.#movements;
	}

	deposit(value) {
		this.#movements.push(value);
	}

	withdraw(value) {
		this.deposit(-value);
	}

	requestLoan(value) {
		// if (this.#approveLoan(value)) {
		if (this._approveLoan(value)) {
			this.deposit(value);
			console.log('Loan approved');
		}
	}

	static helper() {
		console.log('Helper');
	}

	// Private methods
	// Not implemented in Google Chrome
	// #approveLoan(value) {
	_approveLoan(value) {
		return true;
	}
}

const acc1 = new Account('Dice', 'USD', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// acc1.#approveLoan(1000); // shows as a private field instead of a private method

Account.helper();
