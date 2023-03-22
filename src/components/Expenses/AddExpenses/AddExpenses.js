import ExpenseForm from './ExpenseForm';
import './AddExpenses.css';
import { useState } from 'react';

const AddExpense = (props) => {
    const [isAdding,setIsAdding] = useState(false);
    const addExpenseHandler= (getExpense) => {
        const expense = {
            ...getExpense,
            id: Math.random()
        };
        props.onAddExpense(expense);
        setIsAdding(false);
    }
    const setIsAddingHandler = () => {
        setIsAdding(true);
    }
    const stopIsAddingHandler = () => {
        setIsAdding(false);
    }
    return (
        <div className = 'add-expense'>
            {!isAdding && <button onClick={setIsAddingHandler}>AddExpense</button>}
            {isAdding &&
            <ExpenseForm onAddExpense={addExpenseHandler}
            onCancel={stopIsAddingHandler}
            />
            }
        </div>
    );
}

export default AddExpense;