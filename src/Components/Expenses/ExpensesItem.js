import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import React, {useState} from "react";
const ExpenseItem =(props)=> {

  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

    const clickHandler = ()=>{
      setTitle("Updated!")
      console.log("clicked")
    }
    const expenseHandler = ()=>{
      setAmount("$100")
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <ExpenseDetails title = {title} amount = {amount}/>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={expenseHandler}>Change Expense</button>
    </Card>
  );
}
export default ExpenseItem