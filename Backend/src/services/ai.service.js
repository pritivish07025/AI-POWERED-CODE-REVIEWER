const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateContent(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash", // ✅ updated — gemini-2.0-flash is deprecated
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);

    throw new Error("Failed to generate AI review");
  }
}

module.exports = generateContent;