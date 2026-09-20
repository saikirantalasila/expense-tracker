import { useNavigate } from "react-router-dom";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";

const AddExpense = ({ onAddExpense }) => {
  const navigate = useNavigate();
  const handleAddExpense = (expense) => {
    onAddExpense(expense);
    navigate("/");
  };
  return (
    <div>
      <h1>AddExpense</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
    </div>
  );
};

export default AddExpense;
