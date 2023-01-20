import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

    
      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = (selectedYear) => {
          setFilteredYear(selectedYear);
      };

    return (
        <>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
            <ExpenseItem key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />  
            ))}
        </>
    );
};

export default Expenses;