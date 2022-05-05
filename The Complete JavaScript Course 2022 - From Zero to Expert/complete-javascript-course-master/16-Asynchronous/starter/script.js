'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

console.log('--------------- Lecture ---------------');
/*
///////////////////////////////////////
// 248 - Our First AJAX Call: XMLHttpRequest
const getCountryData = function (country) {
	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v2/name/${country}`);
	request.send();

	request.addEventListener('load', function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const html = `
            <article class="country">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
						1
					)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>
        `;

		countriesContainer.insertAdjacentHTML('beforeend', html);
		countriesContainer.style.opacity = 1;
	});
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('japan');
/////////////////////////////////////////////////////////////////
// 250 - Welcom to Callback Hell
const renderCountry = function (data, className = '') {
	const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
						1
					)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>
        `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
	// AJAX call country 1
	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v2/name/${country}`);
	request.send();

	request.addEventListener('load', function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		// Render country 1
		renderCountry(data);

		// Get neighbor country
		const neighbor = data.borders?.[0];

		if (!neighbor) {
			return;
		}

		// AJAX call country 2
		const request2 = new XMLHttpRequest();
		request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
		request2.send();

		request2.addEventListener('load', function () {
			const data2 = JSON.parse(this.responseText);
			console.log(data2);

			renderCountry(data2, 'neighbor');
		});
	});
};
// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');

// Callback hell example
setTimeout(() => {
	console.log('1 second passed');
	setTimeout(() => {
		console.log('2 second passed');
		setTimeout(() => {
			console.log('3 second passed');
			setTimeout(() => {
				console.log('4 second passed');
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);
/////////////////////////////////////////////////////////////////
// 251 Promises and the Fetch API
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);
/////////////////////////////////////////////////////////////////
// 252 - Consuming Promises
const renderCountry = function (data, className = '') {
	const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
						1
					)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>
        `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then(function (res) {
// 			console.log(res);
// 			return res.json();
// 		})
// 		.then(function ([data]) {
// 			console.log(data);
// 			renderCountry(data);
// 		});
// };
const getCountryData = function (country) {
	// Country 1
	fetch(`https://restcountries.com/v2/name/${country}`)
		.then((res) => res.json())
		.then(([data]) => {
			renderCountry(data);

			const neighbor = data.borders?.[0];

			if (!neighbor) {
				return;
			}

			// Country 2
			return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
		})
		.then((res) => res.json())
		.then((data) => renderCountry(data, 'neighbor'));
};

getCountryData('usa');
/////////////////////////////////////////////////////////////////
// 254 - Handling Rejected Promises
const renderCountry = function (data, className = '') {
	const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
						1
					)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>
        `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	// countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
	countriesContainer.insertAdjacentText('beforeend', msg);
	// countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
	// Country 1
	fetch(`https://restcountries.com/v2/name/${country}`)
		.then((res) => res.json())
		.then(([data]) => {
			renderCountry(data);

			const neighbor = data.borders?.[0];

			if (!neighbor) {
				return;
			}

			// Country 2
			return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
		})
		.then((res) => res.json())
		.then((data) => renderCountry(data, 'neighbor'))
		.catch((err) => {
			console.error(`${err}`);
			renderError(`Something went wrong: ${err.message}`);
		})
		.finally(() => {
			countriesContainer.style.opacity = 1;
		});
};

btn.addEventListener('click', function () {
	getCountryData('usa');
});

getCountryData('qweofij');
/////////////////////////////////////////////////////////////////
// 255 - Throwing Errors Manually
const renderCountry = function (data, className = '') {
	const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
						1
					)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>
        `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
	countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
	return fetch(url).then((res) => {
		if (!res.ok) {
			throw new Error(`${errorMsg} (${res.status})`);
		}

		return res.json();
	});
};

const getCountryData = function (country) {
	// Country 1
	// fetch(`https://restcountries.com/v2/name/${country}`)
	// 	.then((res) => {
	// 		console.log(res);

	// 		if (!res.ok) {
	// 			throw new Error(`Country not found (${res.status})`);
	// 		}

	// 		return res.json();
	// 	})
	getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
		.then(([data]) => {
			renderCountry(data);

			const neighbor = data.borders?.[0];

			if (!neighbor) {
				throw new Error('No neighbor found');
			}

			// Country 2
			return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`, 'Country not found');
		})
		// .then((res) => {
		// 	if (!res.ok) {
		// 		throw new Error(`Country not found (${res.status})`);
		// 	}

		// 	return res.json();
		// })
		.then((data) => renderCountry(data, 'neighbor'))
		.catch((err) => {
			console.error(`${err}`);
			renderError(`Something went wrong: ${err.message}`);
		})
		.finally(() => {
			countriesContainer.style.opacity = 1;
		});
};

btn.addEventListener('click', function () {
	getCountryData('usa');
});

getCountryData('australia');
/////////////////////////////////////////////////////////////////
// 258 - The Event Loop in practice
console.log('Test start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 4 (in callback queue)
Promise.resolve(`Resolved promise 1`).then((res) => console.log(res)); // 3 (in microtasks queue; has priority to callback queue)

Promise.resolve('Resolved promise 2').then((res) => {
	for (let i = 0; i < 1000000000; i++) {}
	console.log(res);
});

console.log('Test end'); // 2
/////////////////////////////////////////////////////////////////
// 259 - Building a Simple Promise
// Promise takes an executor function that passes in a resolve and a reject function
const lottery = new Promise(function (resolve, reject) {
	console.log('Lottery draw is happening. . . ');
	setTimeout(function () {
		if (Math.random() >= 0.5) {
			resolve('You WIN!');
		} else {
			reject(new Error('You lost your money!'));
		}
	}, 2000);
});

lottery.then((res) => console.log(res)).catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

wait(2)
	.then(() => {
		console.log('1 second passed');
		return wait(1);
	})
	.then(() => {
		console.log('2 seconds passed');
		return wait(1);
	})
	.then(() => {
		console.log('3 seconds passed');
		return wait(1);
	})
	.then(() => console.log('4 seconds passed'));
// setTimeout(() => {
// 	console.log('1 second passed');
// 	setTimeout(() => {
// 		console.log('2 second passed');
// 		setTimeout(() => {
// 			console.log('3 second passed');
// 			setTimeout(() => {
// 				console.log('4 second passed');
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new Error('Problem!')).catch((x) => console.log(x));
/////////////////////////////////////////////////////////////////
// 260 - Promisifying the Geolocation API

const getPosition = function () {
	return new Promise(function (resolve, reject) {
		// navigator.geolocation.getCurrentPosition(
		// 	(position) => resolve(position),
		// 	(err) => reject(err)
		// );
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function (lat, lng) {
	getPosition()
		.then((pos) => {
			const { latitude: lat, longitude: lng } = pos.coords;

			return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
		})
		.then((res) => {
			if (!res.ok) {
				throw new Error(
					`API only allows 3 requests per second. Please wait. (Error Code: ${res.status})`
				);
			}

			return res.json();
		})
		.then((data) => {
			console.log(data);

			if (data.error) {
				throw new Error(`Data not found. ${data.error.description}`);
			}

			console.log(`You are in ${data.city}, ${data.country}.`);

			return fetch(`https://restcountries.com/${data.country}`);
		})
		.catch((err) => {
			console.error(`${err.message}`);
		});
};

btn.addEventListener('click', whereAmI);
/////////////////////////////////////////////////////////////////
*/
