import React from 'react';

import mealsImage from '../../assets/meals.jpeg';

const Header = (props) => {
	return (
		<>
			<header>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div>
				<img
					src={mealsImage}
					alt="A table full of delicious food!"
				/>
			</div>
		</>
	);
};

export default Header;
