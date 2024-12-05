const express = require('express');
const { addStaff, updateStaff, deleteStaff } = require('../controllers/staffController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', protect, addStaff);
router.put('/update/:id', protect, updateStaff);
router.delete('/delete/:id', protect, deleteStaff);

module.exports = router;
