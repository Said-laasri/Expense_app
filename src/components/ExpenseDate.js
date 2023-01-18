import './ExpenseDate.css'

const ExpanseDate = (props) => {
    const day = props.date.toLocaleString("en-US", { day: "numeric" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();

    return (
        <div className="date">
            <div className='date_day'>{day}</div>
            <div className='date_month'>{month}</div>
            <div className='date_year'>{year}</div>
        </div>
    );

};

export default ExpanseDate;