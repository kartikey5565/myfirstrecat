import MyItem from "./Components/ExpenseItem";

function App() {
  

const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "super Market",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Amazon.com",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Online",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Furniture Shop",
    },
  ];
  'return' (
    
    <div>
      <h2>Let's get started!</h2>
      

      <MyItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date.toISOString()}
        locationOfExpenditure={expenses[0].location}
      ></MyItem>
      <MyItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date.toISOString()}
        locationOfExpenditure={expenses[1].location}
      ></MyItem>
      <MyItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date.toISOString()}
        locationOfExpenditure={expenses[2].location}
      ></MyItem>
      <MyItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date.toISOString()}
        locationOfExpenditure={expenses[3].location}
      ></MyItem>
    </div>
    );
}
export default App;
