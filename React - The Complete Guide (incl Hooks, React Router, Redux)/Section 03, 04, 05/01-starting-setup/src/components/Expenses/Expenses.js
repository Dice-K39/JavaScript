import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2019');

	const selectedYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				onSelectedYearChange={selectedYearHandler}
				selected={filteredYear}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
