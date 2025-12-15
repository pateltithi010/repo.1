import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/users", (req, res) => {
  res.json({
    message: "Backend API is working!",
    users: ["Tithi"]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
