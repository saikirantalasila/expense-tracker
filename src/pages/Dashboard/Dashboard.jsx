import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
import ExpenseCategoryFilter from "../../components/ExpenseFilter/ExpenseCategoryFilter";
import ExpenseDateFilter from "../../components/ExpenseFilter/ExpenseDateFilter";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import "./Dashboard.css";
const Dashboard = ({
  expenses,
  totalExpenses,
  onAddExpense,
  onDeleteExpense,
  onEditExpense,
  editingExpense,
  selectedCategory,
  setSelectedCategory,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
  onCancelEdit,
}) => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <ExpenseSummary expenses={expenses} />
      <div className="dashboard-filters">
        <ExpenseCategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ExpenseDateFilter
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      <ExpenseForm
        onAddExpense={onAddExpense}
        editingExpense={editingExpense}
        onCancelEdit={onCancelEdit}
      />
      {expenses.length === 0 ? (
        totalExpenses.length === 0 ? (
          <p className="empty-state">
            📋 No expenses yet. Add your first expense!
          </p>
        ) : (
          <p className="empty-state">
            🔍 No expenses found for the selected filters.
          </p>
        )
      ) : (
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
        />
      )}
    </div>
  );
};

export default Dashboard;
