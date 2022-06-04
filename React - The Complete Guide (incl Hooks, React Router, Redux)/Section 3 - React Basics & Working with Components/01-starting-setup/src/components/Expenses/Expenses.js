import React, { useState } from 'react';

import ExpenseFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	const [yearFilter, setYearFilter] = useState('2020');

	const yearFilterChangeHandler = (year) => {
		setYearFilter(year);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear().toString() === yearFilter;
	});

	let expensesContent = <p>No expenses found.</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={yearFilter}
					onYearFilterChange={yearFilterChangeHandler}
				/>
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;
