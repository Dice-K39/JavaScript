import React from 'react';

import './Card.css';

// props.children is the content between the Card tag
// props.className is the css styling used in what the Card tag is wrapping
const Card = (props) => {
	const classes = 'card ' + props.className;

	return <div className={classes}>{props.children}</div>;
};

export default Card;
