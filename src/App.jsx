import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import initialExpenses from "./data/expenses";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddExpense from "./pages/AddExpense/AddExpense";
import Reports from "./pages/Reports/Reports";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

import "./App.css";

const App = () => {
  // 1.All States
  const [expenses, setExpenses] = useState(initialExpenses);

  const [editingExpense, setEditingExpense] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setEditingExpense(null);
    }
  }, [location.pathname]);

  // 2.Handlers(functions)

  const confirmDelete = () => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== deleteId));
    setShowModal(false);
    setDeleteId(null);
  };
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };
  const cancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const addExpenseHandler = (expense) => {
    if (editingExpense) {
      setExpenses((prev) =>
        prev.map((exp) => (exp.id === expense.id ? expense : exp)),
      );
      setEditingExpense(null);
    } else {
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
    }
  };

  const editExpenseHandler = (id) => {
    const exp = expenses.find((e) => e.id === id);
    setEditingExpense(exp);
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  // 3. Filter logic
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);

    const monthMatch =
      selectedMonth === "" ||
      expenseDate.getMonth() + 1 === parseInt(selectedMonth, 10);

    const yearMatch =
      selectedYear === "" ||
      expenseDate.getFullYear() === parseInt(selectedYear, 10);

    const categoryMatch =
      selectedCategory === "" || expense.category === selectedCategory;

    return monthMatch && categoryMatch && yearMatch;
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              expenses={filteredExpenses}
              totalExpenses={expenses}
              onAddExpense={addExpenseHandler}
              onDeleteExpense={handleDeleteClick}
              onEditExpense={editExpenseHandler}
              editingExpense={editingExpense}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              onCancelEdit={handleCancelEdit}
            />
          }
        />
        <Route
          path="/add"
          element={<AddExpense onAddExpense={addExpenseHandler} />}
        />
        <Route path="/reports" element={<Reports expenses={expenses} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ConfirmModal
        show={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
};

export default App;
