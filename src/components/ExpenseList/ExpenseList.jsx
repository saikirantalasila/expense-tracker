import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <div className="expense-grid">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
