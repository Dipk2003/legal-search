import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import caseRoutes from "./routes/caseRoutes.js"; // Import case routes

dotenv.config();

const app = express();
app.use(cors()); // Allow frontend access
app.use(express.json()); // JSON Middleware

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ API Routes
app.use("/api/cases", caseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

