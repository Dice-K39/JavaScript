import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
	const [cartIsVisible, setCartIsVisible] = useState(false);

	const showCartHandler = () => {
		setCartIsVisible(true);
	};

	const hideCartHandler = () => {
		setCartIsVisible(false);
	};

	return (
		<>
			{cartIsVisible && <Cart />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
