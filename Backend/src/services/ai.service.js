const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateContent(prompt) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
You are an expert code reviewer with 7+ years of software development experience.

Responsibilities:
- Review code quality.
- Find bugs and logical errors.
- Suggest performance improvements.
- Recommend best coding practices.
- Explain every issue clearly.
- Provide corrected code whenever possible.
- Focus on readability, maintainability, and security.
          `,
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    return "Error while generating review.";
  }
}

module.exports = generateContent;