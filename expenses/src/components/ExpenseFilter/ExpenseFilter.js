import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const handleDateChange = (event) => {
    props.onDateFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          className="xpenses-filter__control"
          value={props.filterYear}
          onChange={handleDateChange}
        >
          <option value="9999">All Years</option>  
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
