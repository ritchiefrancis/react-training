import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState(2019);

  const dateFilterChange = (year) => {
    setFilterYear(year);
    console.log("setting year to ", year);
  };

  return (
    <>
      <ExpenseFilter
        filterYear={filterYear}
        onDateFilterChange={dateFilterChange}
      />
      {props.expenses.map((x) => (
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </>
  );
}

export default Expenses;
