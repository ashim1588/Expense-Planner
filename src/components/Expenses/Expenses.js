import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');
  const changeFilterHandler = (year) => {
    setFilterYear(year);
  }
    return (
      <div>
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={changeFilterHandler} selected={filterYear}/>
      <ExpenseItem 
      title={props.expenses[0].title} 
      amount={props.expenses[0].amount} 
      date={props.expenses[0].date}
      />
      <ExpenseItem 
      title={props.expenses[1].title} 
      amount={props.expenses[1].amount} 
      date={props.expenses[1].date}
      />
      <ExpenseItem 
      title={props.expenses[2].title} 
      amount={props.expenses[2].amount} 
      date={props.expenses[2].date}
      />
    </Card>
    </div>
    );
}

export default Expenses;