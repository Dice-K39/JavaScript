import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		console.log('This is in NewExpense');
		console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	const renderForm = () => {
		setShowForm((prevState) => !prevState);
	};

	return (
		<div className="new-expense">
			{!showForm && <button onClick={renderForm}>Add New Expense</button>}
			{showForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					unrenderForm={renderForm}
				/>
			)}
		</div>
	);
};

export default NewExpense;
