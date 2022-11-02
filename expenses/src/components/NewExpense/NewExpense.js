import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    if(props.display){

        return (
            <div className="new-expense">
                <ExpenseForm {...props}/>
            </div>
    
        )
    }

    return <>
    </>
    

};

export default NewExpense;
