import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpanse = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddNewExpanse(expenseData);
    setIsEditing(false);
  };

  const displayFormHandler = () => {
    setIsEditing(true);
  };

  const hideFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {!isEditing && (
        <button className="edit" onClick={displayFormHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          style={{ display: "none" }}
          onSaveExpanse={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </Card>
  );
};

export default NewExpanse;
