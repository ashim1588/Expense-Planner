import ExpenseForm from './ExpenseForm';
import './AddExpenses.css';

const AddExpense = (props) => {
    const addExpenseHandler= (getExpense) => {
        const expense = {
            ...getExpense,
            id: Math.random()
        };
        props.onAddExpense(expense);
    }
    return (
        <div className = 'add-expense'>
            <ExpenseForm onAddExpense={addExpenseHandler}/>
        </div>
    );
}

export default AddExpense;