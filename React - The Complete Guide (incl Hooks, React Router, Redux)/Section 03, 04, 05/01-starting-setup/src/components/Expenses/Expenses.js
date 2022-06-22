import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2019');

	const selectedYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(selectedYear);
	};
	return (
		<Card className="expenses">
			<ExpensesFilter
				onSelectedYearChange={selectedYearHandler}
				selected={filteredYear}
			/>
			{props.items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
