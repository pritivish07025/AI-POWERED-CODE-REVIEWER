# 🤖 AI-Powered Code Reviewer

An AI-powered code review tool built on the **MERN-adjacent stack** (React + Express, no DB required) that analyzes your code and gives instant, expert-level feedback — bugs, performance issues, security flaws, and best-practice suggestions — powered by **Google's Gemini API**.

🔗 **Live Demo:** [ai-powered-code-reviewer-86n9.vercel.app](https://ai-powered-code-reviewer-86n9.vercel.app)

---

## ✨ Features

- 🧠 **AI Code Review** — Paste any code snippet and get a detailed review in seconds
- 🐛 **Bug & Logic Error Detection** — Finds issues a human reviewer might miss
- ⚡ **Performance Suggestions** — Tips to optimize your code
- 🔒 **Security-Aware Feedback** — Flags unsafe patterns
- ✅ **Best Practice Recommendations** — Improves readability & maintainability
- 🎨 **Live Code Editor** — Syntax-highlighted editor (PrismJS) with real-time typing
- 📝 **Markdown-Rendered Review Output** — AI response rendered beautifully with syntax-highlighted code blocks

---

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- `react-simple-code-editor` + PrismJS (code editor & syntax highlighting)
- `react-markdown` + `rehype-highlight` (rendering AI review output)
- Axios (API calls)

**Backend**
- Node.js + Express 5
- Google Generative AI SDK (`@google/generative-ai`) — `gemini-1.5-flash` model
- CORS (configured with explicit allowed origins for secure cross-origin requests)
- dotenv (environment variable management)

**Deployment**
- Frontend → **Vercel**
- Backend → **Render**

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A free [Gemini API key](https://aistudio.google.com/app/apikey) (from Google AI Studio)

### 1. Clone the repository
```bash
git clone https://github.com/pritivish07025/AI-POWERED-CODE-REVIEWER.git
cd AI-POWERED-CODE-REVIEWER
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Run the backend:
```bash
npm run dev      # development (nodemon)
# or
npm start        # production
```
Server runs at `http://localhost:3000`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/`:
```env
VITE_API_URL=http://localhost:3000
```

Run the frontend:
```bash
npm run dev
```
App runs at `http://localhost:5173`

---

## 🔌 API Reference

### `POST /ai/get-review`

Sends code to the AI for review.

**Request Body:**
```json
{
  "code": "function sum() { return 1 + 1 }"
}
```

**Response:** Plain text / Markdown-formatted AI review string.

---

## 🚀 Deployment Notes

- **Backend (Render):** Root directory must be set to `Backend`, start command `node server.js`, and `GEMINI_API_KEY` added under Render's Environment Variables tab.
- **Frontend (Vercel):** Root directory set to `frontend`, with `VITE_API_URL` pointing to the deployed Render backend URL.
- **CORS:** Backend explicitly whitelists both `http://localhost:5173` (dev) and the deployed Vercel URL — update `allowedOrigins` in `Backend/src/app.js` if you deploy your own fork.

---

## 🗺️ Roadmap

- [ ] Support for multiple programming languages in the editor
- [ ] Save review history (requires database integration)
- [ ] User authentication
- [ ] Dark/light theme toggle
- [ ] Export review as PDF

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👩‍💻 Author

**Priti Vishwakarma** ([@pritivish07025](https://github.com/pritivish07025))

⭐ If you found this project useful, consider giving it a star!
