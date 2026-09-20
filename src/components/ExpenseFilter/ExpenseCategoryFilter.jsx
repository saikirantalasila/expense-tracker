import "./ExpenseCategoryFilter.css";

const ExpenseCategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-filter">
      <label htmlFor="category">Filter By Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseCategoryFilter;
