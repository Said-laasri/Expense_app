import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div >
      <header className='app'>
        <h1>Let's get started</h1>
        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
