import ExpenseForm from './ExpenseForm';
import { v4 as uuidv4 } from 'uuid';
import Card from '../UI/Card';
import './NewExpense.css';


const NewExpanse = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: uuidv4()
        };
        props.onAddNewExpanse(expenseData);
    };



    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpanse={saveExpenseDataHandler} />
        </Card>
    );

};

export default NewExpanse;