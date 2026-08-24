const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// ===============================
// CORS CONFIGURATION
// ===============================

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://ai-powered-code-reviewer-86n9.vercel.app'
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests without origin
            // Example: Postman, curl, server-to-server
            if (!origin) {
                return callback(null, true);
            }

            // Allow only trusted origins
            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            console.log('Blocked CORS origin:', origin);
            return callback(new Error('Not allowed by CORS'));
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());

// ===============================
// HOME ROUTE
// ===============================

app.get('/', (req, res) => {
    res.send('AI Powered Code Reviewer API is running');
});

// ===============================
// AI ROUTES
// ===============================

app.use('/ai', aiRoutes);

// ===============================
// CORS ERROR HANDLER
// (must come AFTER routes, catches the "Not allowed by CORS" error)
// ===============================

app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({ error: 'CORS: This origin is not allowed' });
    }
    next(err);
});

// ===============================
// EXPORT APP
// ===============================

module.exports = app;