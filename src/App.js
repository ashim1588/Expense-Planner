import './App.css';
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/Expenses/AddExpenses/AddExpenses';
import { useState } from 'react';

const App = () => {
  const [expenses,setExpenses] = useState([
    {id: 'exp1', title: 'Petrol', amount: 110, date: new Date(2021, 8, 12) },
    {id: 'exp2', title: 'Laptop', amount: 110, date: new Date(2020, 9, 12) },
    {id: 'exp3', title: 'Mobile', amount: 110, date: new Date(2022, 3, 12) },
  ]);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Expense Tracker - React App</h2>
      <AddExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
