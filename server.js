import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Temporary in-memory database
let expenses = [];
let idCounter = 1;

/* ---------------- CREATE ---------------- */
app.post("/api/expenses", (req, res) => {
  const newExpense = {
    id: idCounter++,
    title: req.body.title,
    amount: req.body.amount,
  };

  expenses.push(newExpense);
  res.status(201).json({
    message: "Expense added successfully",
    data: newExpense,
  });
});

/* ---------------- READ ---------------- */
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

/* ---------------- UPDATE ---------------- */
app.put("/api/expenses/:id", (req, res) => {
  const id = Number(req.params.id);
  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  expense.title = req.body.title;
  expense.amount = req.body.amount;

  res.json({
    message: "Expense updated successfully",
    data: expense,
  });
});

/* ---------------- DELETE ---------------- */
app.delete("/api/expenses/:id", (req, res) => {
  expenses = expenses.filter(e => e.id !== Number(req.params.id));

  res.json({ message: "Expense deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
