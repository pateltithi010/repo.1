 import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" }
];

// GET API
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST API
app.post("/api/items", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Item name required" });
  }

  const newItem = {
    id: Date.now(),
    name
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
