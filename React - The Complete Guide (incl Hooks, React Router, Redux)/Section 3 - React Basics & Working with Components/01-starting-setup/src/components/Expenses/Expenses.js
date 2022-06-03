import React, { useState } from 'react';

import ExpenseFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	const [yearFilter, setYearFilter] = useState('2020');

	const yearFilterChangeHandler = (year) => {
		console.log(year);
		setYearFilter(year);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={yearFilter}
					onYearFilterChange={yearFilterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
