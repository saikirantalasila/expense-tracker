import "./ExpenseSummary.css";

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  return (
    <div className="summary">
      <h2>Total Expense : ₹{totalExpenses}</h2>
    </div>
  );
};

export default ExpenseSummary;
