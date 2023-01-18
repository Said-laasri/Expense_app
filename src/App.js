import React from "react";
import Expenses from "./components/Expenses/Expense";

function App() {
  
  return (
    <div className="container">
      <header className="app">
        <h1>My Expenses</h1>
       <Expenses />
      </header>
    </div>
  );
}

export default App;
