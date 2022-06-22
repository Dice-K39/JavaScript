import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2019');

	const selectedYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredArray = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				onSelectedYearChange={selectedYearHandler}
				selected={filteredYear}
			/>
			{filteredArray.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
