import './ExpenseItem.css'

const ExpenseItem = () => {
  const expenceDate = new Date(2021, 2, 28);
  const expenceTitle = 'Car Insurance';
  const expenceAmount = 294.67;

  return (
    <div className='expense'>
      <div className='date'>{expenceDate.toISOString().slice(0, 10)}</div>
      <div className='description'>
        <h2>{expenceTitle}</h2>
        <div>{expenceAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;