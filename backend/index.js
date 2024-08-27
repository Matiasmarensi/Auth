import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server running on port ", PORT);
});
