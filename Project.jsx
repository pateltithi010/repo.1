import { useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Project() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      title,
      amount,
      date,
      completed: false,
    };

    setItems([...items, newItem]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
      )
    );
  };

  const clearAll = () => setItems([]);

  return (
    <div className="project-box">
      <h2 className="fw-bold text-center">Add Expense</h2>

      <div className="d-flex gap-3 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="btn btn-primary px-4" onClick={addItem}>
          Add
        </button>

        <button className="btn btn-danger px-4" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <div className="mt-4">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onToggle={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}
