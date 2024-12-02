const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/staff', require('./routes/staff'));
app.use('/api/menu', require('./routes/menu'));
// Add routes for 'admin' and 'menu' as well

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
