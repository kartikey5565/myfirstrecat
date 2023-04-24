import "./AllExpenses.css";
import ExpenseItem from "./ExpenseItem";
const AllExpenses = (props) => {
  // const classes = 'allexpenses ' + props.className
  var filteredArr = props.items.filter(
    (e) => e.date.getFullYear().toString() === props.date
  );
  if (filteredArr.length===0){
    return <h2>No Expenses</h2>
  }

  return (
    <div>
      { filteredArr.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))
  }

    </div>
  );
};
export default AllExpenses;