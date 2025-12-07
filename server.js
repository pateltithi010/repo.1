console.log("Server file loaded...");
import resourceRoute from "./routes/resourceRoute.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRoute from "./routes/testRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();

connectDB();

// MIDDLEWARE SHOULD COME BEFORE ROUTES
app.use(express.json());

// ROUTES
app.use("/api/test", testRoute);
app.use("/api/auth", authRoute);
app.use(express.json());
app.use("/api/resource", resourceRoute);


// SERVER SHOULD BE LAST
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
  