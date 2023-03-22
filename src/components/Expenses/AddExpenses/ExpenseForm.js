import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [expTitle, setExpTitle] = useState('');
    const [expAmount, setExpAmount] = useState('');
    const [expDate, setExpDate] = useState('');

    const titleChangedHandler = (event) => {
        setExpTitle(event.target.value);
    }
    const amountChangedHandler = (event) => {
        setExpAmount(event.target.value);
    }
    const dateChangedHandler = (event) => {
        setExpDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const addExpense = {
            title: expTitle,
            amount: expAmount,
            date: new Date(expDate)
        };
        props.onAddExpense(addExpense);
        setExpTitle('');
        setExpAmount('');
        setExpDate('');
    }
    return (
        <form onSubmit={submitHandler} > 
            <div className='add-expense__controls'>
             <div className='add-expense__control'>
                <label>Title</label>
                <input type='text' value={expTitle} onChange={titleChangedHandler}/>
             </div>
             <div className='add-expense__control'>
                <label>Amount</label>
                <input type='number' min='1' step='1' value={expAmount}  onChange={amountChangedHandler}/>
             </div>
             <div className='add-expense__control'>
                <label>Date</label>
                <input type='date' min='2015-01-01' max='2023-12-31' value={expDate} onChange={dateChangedHandler}/>
             </div>
            </div>
            <div className='add-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;