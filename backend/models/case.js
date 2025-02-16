import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  keywords: { type: [String], required: true },
  caseType: { type: String, required: true },
  embedding: { type: [Number], default: [] }, // ✅ AI Embedding Field
}, { timestamps: true });

const Case = mongoose.model("Case", caseSchema);

export default Case;





