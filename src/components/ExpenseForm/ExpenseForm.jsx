import { useEffect, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense, editingExpense, onCancelEdit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || parseFloat(amount) <= 0 || !date || !category) {
      alert("Please enter valid amount and fill in all fields");
      return;
    }
    const expenseData = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category,
    };
    onAddExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  const handleCancel = () => {
    onCancelEdit();
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label htmlFor="expense-title">Expense Title</label>
      <input
        className="expense-input"
        id="expense-title"
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="expense-amount">Amount</label>
      <input
        id="expense-amount"
        className="expense-input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="expense-date">Date</label>
      <input
        id="expense-date"
        className="expense-input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="expense-category">Category</label>
      <select
        id="expense-category"
        className="expense-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      {editingExpense && (
        <button type="button" onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      )}
      <button type="submit" className="expense-btn">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
