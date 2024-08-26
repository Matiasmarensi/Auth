import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  connectDB();
  console.log("Server running on port 3000");
});
