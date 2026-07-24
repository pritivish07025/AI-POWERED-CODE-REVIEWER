const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

// CORS ko explicit origin ke saath configure kiya — 
// isse Render pe reliably kaam karega, chahe browser strict ho ya na ho
const allowedOrigins = [
    'http://localhost:5173',                                  // local dev ke liye
    'https://ai-powered-code-reviewer-86n9.vercel.app'        // production frontend
]

app.use(cors({
    origin: function (origin, callback) {
        // Postman/curl jaise tools se bina origin ke request aati hai, unhe allow karo
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app