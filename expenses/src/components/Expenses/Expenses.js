import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(9999);

  const dateFilterChange = (year) => {
    setFilterYear(year);

    if (Number(year) === 9999) {
      return props.expenses;
    }

    let x = props.expenses.filter(
      (x) => Number(year) === x?.date?.getFullYear()
    );

    return x;
  };

  let val = props.expenses;

  if (Number(filterYear) !== 9999) {
    val = props.expenses.filter((x) => Number(filterYear) === x?.date?.getFullYear());
  }

  

  return (
    <>
      <ExpenseFilter
        filterYear={filterYear}
        onDateFilterChange={dateFilterChange}
      />
      {val.length === 0 ? (
        <p className="expenses-error-message">No results for {filterYear}</p>
      ) : (
        val &&
        val.map((x) => (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
          />
        ))
      )}
    </>
  );
}

export default Expenses;
