export default function ExpenseList({ expenses, fetchExpenses, setMessage }) {

  const deleteExpense = async (id) => {
    if (!window.confirm("Delete this expense?")) return;

    await fetch(`http://localhost:3000/api/expenses/${id}`, {
      method: "DELETE",
    });

    setMessage("❌ Expense deleted");
    fetchExpenses();
  };

  return (
    <div className="list">
      {expenses.map(exp => (
        <div className="item" key={exp._id}>
          <span>{exp.title} - ₹{exp.amount} ({exp.category})</span>
          <button className="delete" onClick={() => deleteExpense(exp._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
