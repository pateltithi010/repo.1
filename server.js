import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // VERY IMPORTANT for POST data

// POST API
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  console.log("POST request received:");
  console.log("Name:", name);
  console.log("Email:", email);

  res.json({
    success: true,
    message: "User received successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
