import express from "express";
import axios from "axios";

const router = express.Router();

// ✅ Search Legal Cases from CourtListener API
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    // 🔹 Call CourtListener API with headers
    const response = await axios.get(`https://www.courtlistener.com/api/rest/v3/opinions/?search=${query}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", 
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error searching cases", error: error.message });
  }
});

export default router;




