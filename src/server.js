// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authMiddleware = require('./middleware/authMiddleware'); // Import authMiddleware

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Example route that requires the user to be an Admin
app.get('/admin', authMiddleware('admin'), (req, res) => {
    res.send('Welcome, Admin!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
