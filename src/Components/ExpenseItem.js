import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const value = props.date + 1000;
  // console.log(props.date);
  return (
    <div className="expense-item">
      <ExpenseDate parentToChild={props.date} />

      <h2> {props.date} </h2>
      <div className="expense_item_description">
        <h2>{props.Description} </h2>
        <h2> {value} </h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
