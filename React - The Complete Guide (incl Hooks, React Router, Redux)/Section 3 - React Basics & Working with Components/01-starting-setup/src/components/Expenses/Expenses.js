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

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={yearFilter}
					onYearFilterChange={yearFilterChangeHandler}
				/>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
