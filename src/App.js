import AllExpenses from "./components/Expenses/AllExpenses";
import NewExpense from "./components/newExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseChart from "./components/Expenses/ExpenseChart";
import { useState } from "react";
//import newExpense from "./components/newExpense/newExpense";
const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
const App = () => {
  console.log("Rendered")
  const [expenses, updateExpenses] = useState(dummyData);
  const [selectedYear, setSelectedYear] = useState('2020')
  const newExpenseHandler = data =>{
    console.log(data)
    updateExpenses(preExpenses =>{
      return [data, ...preExpenses]
    })
    console.log(expenses)
  }
  const yearSelectHandler = data =>{ 
    setSelectedYear(data)
  }
  var filteredArr = expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );

  return (<div>
      <NewExpense onNewExpense = {newExpenseHandler}/>
      <ExpenseFilter selected={selectedYear} onYearSelect ={yearSelectHandler}/>
      <ExpenseChart expenses ={filteredArr}/>
      <AllExpenses items = {expenses} date = {selectedYear}/>
      </div>

      
    
  );
}
export default App;