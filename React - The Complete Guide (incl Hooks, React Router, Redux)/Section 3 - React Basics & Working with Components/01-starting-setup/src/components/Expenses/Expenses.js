import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
	const [yearFilter, setYearFilter] = useState('2020');

	const yearFilterChangeHandler = (year) => {
		setYearFilter(year);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear().toString() === yearFilter;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={yearFilter}
					onYearFilterChange={yearFilterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
