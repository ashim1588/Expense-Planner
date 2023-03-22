import './App.css';
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/Expenses/AddExpenses/AddExpenses';

const App = () => {
  const expenses1 = [
    {id: 'exp1', title: 'Petrol', amount: 110, date: new Date(2021, 8, 12) },
    {id: 'exp2', title: 'Laptop', amount: 110, date: new Date(2021, 9, 12) },
    {id: 'exp3', title: 'Mobile', amount: 110, date: new Date(2021, 3, 12) },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  }
  return (
    <div className="App">
      <h2>This is a react app!</h2>
      <AddExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses1}/>
    </div>
  );
}

export default App;
