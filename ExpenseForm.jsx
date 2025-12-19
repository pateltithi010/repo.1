import { useState } from "react";

export default function ExpenseForm({ fetchExpenses, setMessage }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const addExpense = async () => {
    if (!title || !amount || !category) return;

    await fetch("http://localhost:3000/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount, category }),
    });

    setMessage("✅ Expense added successfully");
    fetchExpenses();
    setTitle(""); setAmount(""); setCategory("");
  };

  return (
    <div className="card">
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
}
