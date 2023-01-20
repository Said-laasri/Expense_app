import React, { useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expense";
const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "New Desk (Wooden)",
    amount: 294.67,
    date: new Date(2023, 1, 10),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2022, 4, 28),
  },
  {
    id: "e4",
    title: "New TV",
    amount: 294.67,
    date: new Date(2020, 2, 2),
  },
  {
      id: "e5",
      title: "New Laptop",
      amount: 1000.03,
      date: new Date(2023, 2, 1),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <header className="app">
        <h1>My Expenses</h1>
        <NewExpense onAddNewExpanse={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
