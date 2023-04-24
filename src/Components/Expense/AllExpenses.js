import "./AllExpenses.css";
import ExpenseItem from "./ExpenseItem";
const AllExpenses = (props) => {
  // const classes = 'allexpenses ' + props.className
  var filteredArr = props.items.filter(
    (e) => e.date.getFullYear().toString() === props.date
  );
  let expensesContent = <p>No Expenses</p>
  let single = <p></p>

  if (filteredArr.length===1){
    single = <p> Only Single expense. Add More</p>
  }

  if (filteredArr.length>0){
    expensesContent = filteredArr.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))
  }


  return (
    <div>
      {expensesContent}
      {single}
    </div>
  );
};
export default AllExpenses;