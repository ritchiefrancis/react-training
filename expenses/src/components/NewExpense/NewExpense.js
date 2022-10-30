import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {


    return (
        <div className="new-expense">
            <ExpenseForm {...props}/>
        </div>

    )

};

export default NewExpense;
