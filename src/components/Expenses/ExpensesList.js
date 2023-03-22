import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if(props.filteredExpenses.length){
        return props.filteredExpenses.map((expense) => (
            <ExpenseItem 
            key = {expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />
        )); 
    }
    return <h2 style={{color: 'white', textAlign: 'center'}}>
        No Expenses Found.
    </h2>
};

export default ExpensesList;