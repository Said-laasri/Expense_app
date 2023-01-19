import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [inputedTitle, setInputedTitle] = useState('');
    const [inputedAmount, setInputedAmount] = useState('');
    const [inputedDate, setInputedDate] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     inputedTitle: '',
    //     inputedAmount: '',
    //     inputedDate: ''
    // });


    const titleChangeHundler = (e) =>{
            setInputedTitle(e.target.value);
            // setUserInput({
            //     ...userInput,
            //     inputedTitle: e.target.value
            // });
            // setUserInput((prevState) => {
            //     return {...prevState, inputedTitle: e.target.value}
            // }
            // );
    };

    const amountChangeHundler = (e) =>{
        setInputedAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputedAmount: e.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, inputedAmount: e.target.value}
        // })
    };

    const dateChangeHundler = (e) =>{
        setInputedDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputedDate: e.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, inputedDate: e.target.value }
        // })
    };

    const submitHundler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: inputedTitle,
            amount: inputedAmount,
            date: new Date(inputedDate)
        };
        props.onSaveExpanse(expenseData);
        setInputedTitle('');
        setInputedAmount('');
        setInputedDate('');
    }


    return(
        <form  onSubmit={submitHundler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={inputedTitle} onChange={titleChangeHundler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={inputedAmount} min="0.01" step="0.01" onChange={amountChangeHundler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={inputedDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHundler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;