import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
 
  return (
    <Card className="expense">
      <div className="date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <div>{props.amount}$</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
