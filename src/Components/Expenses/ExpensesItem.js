import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem =(props)=> {

    const clickHandler = ()=>{
      console.log("clicked")
    }
    const deleteHandler = (e)=>{
      console.log(e.target.parentNode)
      const r = document.querySelector("#root").firstChild
      r.removeChild(e.target.parentNode)
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <ExpenseDetails title = {props.title} amount = {props.amount}/>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
}
export default ExpenseItem;