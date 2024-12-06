const express = require('express');
const { 
    generateReports, 
    getOrders, 
    updateOrderStatus, 
    getMenuItemsBySales, 
    calculateTotalProfits,
    calculateTotalRevenues,
    getOrderHistory
    } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all orders
router.get('/',  getOrders);
// Update order status 
router.patch('/:id/status', updateOrderStatus);
router.get('/reports', generateReports);
router.get('/menu-items-by-sales', getMenuItemsBySales);
router.get('/total-profits', calculateTotalProfits);
router.get('/total-revenues', calculateTotalRevenues);
router.get('/orders-history',getOrderHistory)

module.exports = router;
