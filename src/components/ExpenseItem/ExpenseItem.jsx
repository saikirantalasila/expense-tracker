import "./ExpenseItem.css";

const ExpenseItem = ({ expense, onDeleteExpense, onEditExpense }) => {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
      <p>{expense.category}</p>
      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEditExpense(expense.id)}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => onDeleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
