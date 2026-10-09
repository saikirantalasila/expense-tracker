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
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  onCancelEdit,
}) => {
  const handleClearAll = () => {
    setSelectedCategory("");
    setSelectedMonth("");
    setSelectedYear("");
    setSearchTerm("");
    setSortOption("");
  };
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
        <div className="search-filter">
          <label htmlFor="expense-search">Search:</label>
          <input
            id="expense-search"
            type="text"
            placeholder="search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-filter">
          <label htmlFor="sort-expenses">Sort:</label>
          <select
            id="sort-expenses"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Default</option>
            <option value="amount-low">Amount: Low → High</option>
            <option value="amount-high">Amount: High → Low</option>
            <option value="date-new">Date: Newest → Oldest</option>
            <option value="date-old">Date: Oldest → Newest</option>
          </select>
        </div>
        <button
          type="button"
          className="clear-filters-btn"
          onClick={handleClearAll}
        >
          Clear All
        </button>
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
