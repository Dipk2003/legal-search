import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // .env file use karne ke liye

const app = express();
app.use(express.json()); // JSON Middleware

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

