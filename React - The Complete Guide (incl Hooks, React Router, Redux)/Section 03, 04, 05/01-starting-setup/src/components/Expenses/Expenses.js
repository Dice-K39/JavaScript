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
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			/>
			<ExpenseItem
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
			/>
		</Card>
	);
};

export default Expenses;
