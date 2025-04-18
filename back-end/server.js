const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection

dotenv.config();  // Load environment variables

const mongoose = require('mongoose');
const app = express();

// MongoDB connection without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

app.use(express.json());
app.use(cors());

// Setup your routes (example)
app.use('/api', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
