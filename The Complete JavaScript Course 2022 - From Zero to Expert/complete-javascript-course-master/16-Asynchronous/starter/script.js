'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
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
*/
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
