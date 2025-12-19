import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// POST
router.post("/", async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json({ message: "Expense added", expense });
});

// PUT
router.put("/:id", async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json({ message: "Expense updated", updated });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

export default router;
