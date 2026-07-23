import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import EditorModule from "react-simple-code-editor"
const Editor = EditorModule.default || EditorModule
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState(``)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setLoading(true)
    try {
     const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/ai/get-review`,
  { code }
)
      setReview(response.data)
    } catch (err) {
      setReview("⚠️ Review fetch failed. Please try again in a moment.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">{'</>'}</span>
          <span className="logo-text">AI Code Reviewer</span>
        </div>
       
      </header>

      <main>
        <div className="left">
          
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={16}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 15,
                minHeight: "100%",
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            disabled={loading}
            className="review-btn">
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        <div className="right">
          <div className="panel-label">AI Review</div>
          <div className="review-content">
            {loading && (
              <div className="empty-state">
                <div className="spinner"></div>
                <p>Analyzing your code...</p>
              </div>
            )}
            {!loading && !review && (
              <div className="empty-state">
                <span className="empty-icon">✦</span>
                <p>Click "Review Code" to get AI-powered feedback</p>
              </div>
            )}
            {!loading && review && (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App