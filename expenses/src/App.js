import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseButton from "./components/ExpenseButton/ExpenseButton";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [currentExpenses, setCurrentExpenses] = useState(expenses);

  const newExpenseHandler = (expense) => {
    const newEx = {
      ...expense,
      id: Math.random().toString(),
      amount: Number(expense.amount),
    };
    
    setCurrentExpenses(prevState => {return [newEx, ...prevState]});
  };


  const [displayForm, setDisplayForm] = useState(false) 

  const clickHandler = () =>{
    setDisplayForm (prevState => !prevState)
  }


  const hideFormDisplayHandler =  () => {
    setDisplayForm (false)
  }


  return (
    <div className="expenses">
       <NewExpense  formHandler={hideFormDisplayHandler} display={displayForm} newExpense={newExpenseHandler} />
       <ExpenseButton display={!displayForm} onClick={clickHandler}/> 
      <Expenses expenses={currentExpenses} />
    </div>
  );
}

export default App;
