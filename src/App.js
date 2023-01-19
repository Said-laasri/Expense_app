import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expense";

function App() {
    
  const addExpenseHandler = (expenseData) => {
    console.log("In App.js");
    console.log(expenseData);
  };

  return (
    <div className="container">
      <header className="app">
        <h1>My Expenses</h1>
        <NewExpense onAddNewExpanse={addExpenseHandler} />
        <Expenses />
      </header>
    </div>
  );
}

export default App;
