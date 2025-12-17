import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch data on load
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(() => setMessage("Error fetching data"));
  }, []);

  // Submit new data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Item name cannot be empty");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      setItems([...items, data]);
      setName("");
      setMessage("Item added successfully");
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Items List</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter item name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
