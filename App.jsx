import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:3000/api/expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // READ
  const fetchExpenses = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      setError("Failed to fetch expenses");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // CREATE
  const addExpense = async () => {
    if (!title || !amount || !category) {
      setError("All fields are required");
      setMessage("");
      return;
    }

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, amount, category }),
      });

      setMessage("Expense added successfully");
      setError("");
      setTitle("");
      setAmount("");
      setCategory("");
      fetchExpenses();
    } catch (err) {
      setError("Error adding expense");
    }
  };

  // DELETE
  const deleteExpense = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setMessage("Expense deleted successfully");
      setError("");
      fetchExpenses();
    } catch (err) {
      setError("Error deleting expense");
    }
  };

  return (
    <div className="app-container">
      <div className="expense-card">
        <h1>Expense Tracker</h1>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        {/* FORM */}
        <div className="form">
          <div className="inputs">
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button onClick={addExpense}>Add Expense</button>
        </div>

        {/* LIST */}
        <div className="list">
          {expenses.length === 0 && (
            <p className="empty">No expenses added yet</p>
          )}

          {expenses.map((exp) => (
            <div className="item" key={exp.id}>
              <div className="item-text">
                <b>{exp.title}</b>
                <small>{exp.category}</small>
              </div>

              <div className="item-right">
                <span className="amount">₹{exp.amount}</span>
                <button onClick={() => deleteExpense(exp.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
