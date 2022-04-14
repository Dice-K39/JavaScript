"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
	containerMovements.innerHTML = "";

	movements.forEach(function (movement, i) {
		const type = movement > 0 ? "deposit" : "withdrawal";
		const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
            <div class="movements__value">${movement}€</div>
        </div>
        `;

		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

	labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	const out = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);

	labelSumIn.textContent = `${incomes}€`;
	labelSumOut.textContent = `${Math.abs(out)}€`;
	labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};
createUsernames(accounts);

const updateUI = function (acc) {
	// Display movements
	displayMovements(acc.movements);

	// Display balance
	calcDisplayBalance(acc);

	// Display Summary
	calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
	e.preventDefault();

	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);
	console.log(currentAccount);

	// Display UI and message
	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;

		containerApp.style.opacity = 100;

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Number(inputTransferAmount.value);
	const receiverAccount = accounts.find(
		(acc) => acc.username === inputTransferTo.value
	);

	inputTransferAmount.value = inputTransferTo.value = "";

	if (
		amount > 0 &&
		receiverAccount &&
		currentAccount.balance >= amount &&
		receiverAccount?.username !== currentAccount.username
	) {
		currentAccount.movements.push(-amount);
		receiverAccount.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}
});

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Number(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		currentAccount.movements.push(amount);

		updateUI(currentAccount);
	}

	inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		currentAccount.username === inputCloseUsername.value &&
		currentAccount.pin === Number(inputClosePin.value)
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);

		accounts.splice(index, 1);

		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = "";
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log("--------------- Lecture ---------------");
/*
/////////////////////////////////////////////////////////////////
// Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];

// Slice - immutable
console.log("Slice");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// Splice - mutable
console.log("Splice");
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//Reverse - mutable
console.log("Reverse");
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// Concat
console.log("Concat");
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join("-"));
/////////////////////////////////////////////////////////////////
// The New at Method - ES2022
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("dice".at(0));
console.log("dice".at(-1));
/////////////////////////////////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("---- FOR-OF ----");
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log("---- FOREACH ----");
movements.forEach(function (element, index, array) {
    if (element > 0) {
        console.log(`Movement ${index + 1}: You deposited ${element}`);
    } else {
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(element)}`);
    }
});
/////////////////////////////////////////////////////////////////
// forEach with Maps and Sets

// Map
const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
});
/////////////////////////////////////////////////////////////////
// The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(movement) {
//     return movement * eurToUsd;
// });
const movementsUSD = movements.map((movement) => movement * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const movement of movements) {
    movementsUSDfor.push(movement * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((movement, i) => 
    `Movement ${ i + 1 }: You ${ movement > 0 ? "deposited" : "withdrew" } ${ Math.abs(movement) }`);
console.log(movementsDescriptions);
/////////////////////////////////////////////////////////////////
// The filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(movement) {
    return movement > 0;
});
console.log(deposits);

const depositsFor = [];
for (const movement of movements) {
    if (movement > 0) {
        depositsFor.push(movement);
    }
}
console.log(depositsFor);

const withdrawals = movements.filter((movement) => movement < 0);
console.log(withdrawals);
/////////////////////////////////////////////////////////////////
// The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function(accumulator, current, index, array) {
//     console.log(`Iteration ${ index }: ${ accumulator }`);
//     return accumulator + current;
// }, 0);
// console.log(balance);
const balance = movements.reduce((accumulator, current, index, array) => accumulator + current, 0);
console.log(balance);

let balance2 = 0;
for (const movement of movements) {
    balance2 += movement;
}
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, movement) => {
    if (acc > movement) {
        return acc;
    }
    else {
        return movement;
    }
}, movements[0]);
console.log(max);
/////////////////////////////////////////////////////////////////
// The Magic of Chaining Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositsUSD = movements
    .filter((mov => mov > 0))
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * eurToUsd;
    })
    // .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
/////////////////////////////////////////////////////////////////
// The find Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
for (const acc of accounts) {
    if (acc.owner === "Jessica Davis") {
        console.log(acc);
    }
}
/////////////////////////////////////////////////////////////////
// some and every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// Equality
console.log(movements.includes(-130));

// Some: Condition
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);

// Every
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
/////////////////////////////////////////////////////////////////
*/
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overallBalance = accounts
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap: only one level
const overallBalance2 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);