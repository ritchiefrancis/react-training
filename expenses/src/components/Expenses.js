import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <>
      {props.expenses.map((x) => (
        <ExpenseItem
          id={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </>
  );
}

export default Expenses;
