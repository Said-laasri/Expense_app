import ExpanseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
 
  return (
    <Card className="expense">
      <div className="date">
        <ExpanseDate date={props.date} />
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <div>{props.amount}$</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
