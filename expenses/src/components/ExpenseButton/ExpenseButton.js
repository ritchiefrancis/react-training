import "../NewExpense/NewExpense.css"

const ExpenseButton = (props) => {

    if(props.display){
        return (
        <div className="new-expense">
          <button  onClick={props.onClick}>Add New Expense</button>
        </div>
        )
    }
    
    return <></>

    
};

export default ExpenseButton;
