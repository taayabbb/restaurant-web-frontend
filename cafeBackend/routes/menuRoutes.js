const express = require('express');
const { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getMenuItems );
router.post('/add', addMenuItem);
router.put('/update/:id', protect, updateMenuItem);
router.delete('/delete/:id', protect, deleteMenuItem);

module.exports = router;
