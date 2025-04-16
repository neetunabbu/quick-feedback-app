const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');         // MongoDB connection
const routes = require('./routes');               // Now importing index.js from routes

dotenv.config();   // Load environment variables
connectDB();       // Connect to MongoDB

const app = express();

app.use(express.json()); // Parse JSON
app.use(cors());         // Enable CORS

app.use('/api', routes); // All routes prefixed with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
