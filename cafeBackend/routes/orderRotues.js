const express = require('express');
const { generateReports, getOrders, updateOrderStatus } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all orders
router.get('/', protect, getOrders);
// Update order status 
router.patch('/:id/status', protect, updateOrderStatus);
router.get('/reports', protect, generateReports);

module.exports = router;
