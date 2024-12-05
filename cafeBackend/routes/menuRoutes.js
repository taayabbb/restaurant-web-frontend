const express = require('express');
const { addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', protect, addMenuItem);
router.put('/update/:id', protect, updateMenuItem);
router.delete('/delete/:id', protect, deleteMenuItem);

module.exports = router;
