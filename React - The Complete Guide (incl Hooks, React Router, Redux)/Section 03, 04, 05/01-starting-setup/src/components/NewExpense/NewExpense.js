import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		props.onAddExpense(expenseData);
	};

	const editingHandler = () => {
		setIsEditing((prevState) => !prevState);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={editingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
