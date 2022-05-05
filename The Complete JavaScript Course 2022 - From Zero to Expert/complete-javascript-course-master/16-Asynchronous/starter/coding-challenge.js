'use strict';

console.log('--------------- Coding Challenge ---------------');
/*
/////////////////////////////////////////////////////////////////
// Coding Challenge 1
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
/////////////////////////////
// 1
const whereAmI = function (lat, lng) {
	// 2
	fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
		.then((res) => {
			//5
			// if (res.status === 403) {
			if (!res.ok) {
				throw new Error(
					`API only allows 3 requests per second. Please wait. (Error Code: ${res.status})`
				);
			}

			return res.json();
		})
		// 3
		.then((data) => {
			if (data.error) {
				throw new Error(`Data not found. ${data.error.description}`);
			}

			console.log(`You are in ${data.city}, ${data.country}.`);

			getCountryData(data.country);
		})
		// 4
		.catch((err) => {
			console.error(`${err.message}`);
		});
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
// whereAmI(123123, 141515);
/////////////////////////////////////////////////////////////////
// Coding Challenge 2
let currentImg;
const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

// 1
const createImage = function (imgPath) {
	return new Promise(function (resolve, reject) {
		// 2
		const image = document.createElement('img');
		image.src = imgPath;

		image.addEventListener('load', function () {
			imgContainer.append(image);

			resolve(image);
		});

		image.addEventListener('error', function () {
			reject(new Error('Image not found'));
		});
	});
};

// 4
createImage('img/img-1.jpg')
	.then((img) => {
		currentImg = img;
		console.log('Image 1 loaded');

		// 5
		return wait(2);
	})
	.then(() => {
		// 6
		currentImg.style.display = 'none';

		return createImage('img/img-2.jpg');
	})
	.then((img) => {
		currentImg = img;
		console.log('Image 2 loaded');

		//7
		return wait(2);
	})
	.then(() => {
		// 8
		currentImg.style.display = 'none';
	})
	.catch((err) => console.error(err));
/////////////////////////////////////////////////////////////////
*/
