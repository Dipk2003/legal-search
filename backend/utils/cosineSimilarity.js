// ✅ Function to calculate cosine similarity between two vectors
const cosineSimilarity = (vecA, vecB) => {
    if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
  
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
  
    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);
  
    return normA && normB ? dotProduct / (normA * normB) : 0;
  };
  
  export default cosineSimilarity;
  