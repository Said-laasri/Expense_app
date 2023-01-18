import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

    const expanses = [
        {
          id: "e1",
          title: "New Desk (Wooden)",
          amount: 294.67,
          date: new Date(2023, 1, 10),
        },
        {
          id: "e2",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 4, 28),
        },
        {
          id: "e3",
          title: "Toilet Paper",
          amount: 94.67,
          date: new Date(2022, 4, 28),
        },
        {
          id: "e4",
          title: "New TV",
          amount: 294.67,
          date: new Date(2020, 2, 2),
        },
        {
            id: "e5",
            title: "New Laptop",
            amount: 1000.03,
            date: new Date(2023, 2, 1),
        }
      ];

    return (
        <>
        {expanses.map((expense, indx) => (
            <ExpenseItem key={indx}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />  
            ))}
        </>
    );
};

export default Expenses;