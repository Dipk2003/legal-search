import axios from "axios";

// OpenAI API se AI embedding generate karne ka function
export const generateEmbedding = async (text) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/embeddings",
      {
        input: text,
        model: "text-embedding-ada-002",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    return response.data.data[0].embedding;
  } catch (error) {
    console.error("Error generating embedding:", error);
    throw new Error("AI embedding generation failed");
  }
};
 