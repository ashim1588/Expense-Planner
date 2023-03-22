import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');
  const changeFilterHandler = (year) => {
    setFilterYear(year);
  }
  const filteredExpenses = props.expenses.filter(expense =>
    expense.date.getFullYear().toString() === filterYear
    )
    return (
      <div>
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={changeFilterHandler} selected={filterYear}/>
      <ExpensesList filteredExpenses= {filteredExpenses}/>
    </Card>
    </div>
    );
}

export default Expenses;