const express = require('express');
const { getTableInfo, updateTableInfo } = require('../controllers/tableController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all tables or a specific table
router.get('/:id?', getTableInfo);

// Update a table's info
router.put('/update/:id', updateTableInfo);

module.exports = router;
