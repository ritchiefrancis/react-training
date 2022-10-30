import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2022);

  const dateFilterChnage = (year) => {
    setFilterYear(year);
    console.log("setting year to ", year);
  };

  return (
    <>
      <ExpenseFilter
        filterYear={filterYear}
        onDateFilterChange={dateFilterChnage}
      />
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
