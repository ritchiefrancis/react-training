import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(9999);
  const [items, setItems] = useState(props.expenses);


  const dateFilterChange = (year) => {
    setFilterYear(year);
    console.log("setting year to ", year);

    setItems(() => {
      if (Number(year) === 9999) {
        return props.expenses;
      }

      let  x = props.expenses.filter(
        (x) => Number(year) === x?.date?.getFullYear()
      );

      return x;
    });
  };

  return (
    <>
      <ExpenseFilter
        filterYear={filterYear}
        onDateFilterChange={dateFilterChange}
      />
      {items &&
        items.map((x) => (
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
