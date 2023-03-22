import './App.css';
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/Expenses/AddExpenses/AddExpenses';
import { useState } from 'react';

const App = () => {
  const [expenses,setExpenses] = useState([
    {id: 'exp1', title: 'Petrol', amount: 110, date: new Date(2021, 8, 12) },
    {id: 'exp2', title: 'Laptop', amount: 110, date: new Date(2020, 9, 12) },
    {id: 'exp3', title: 'Mobile', amount: 110, date: new Date(2023, 0, 1) },
    {id: 'exp3', title: 'Mobile 2', amount: 210, date: new Date(2023, 2, 2) },
    {id: 'exp3', title: 'Mobile 3', amount: 310, date: new Date(2023, 3, 3) },
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
