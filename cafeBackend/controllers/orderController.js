const Order = require('../models/Order');

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer').populate('items.menuItem');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['pending', 'preparing', 'ready', 'served', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).populate('customer').populate('items.menuItem');

    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Generate Reports
const generateReports = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      { $group: { _id: { $dayOfYear: '$createdAt' }, total: { $sum: '$totalAmount' } } },
    ]);

    res.json({ message: 'Sales report generated', sales });
  } catch (error) {
    res.status(500).json({ message: 'Error generating reports', error });
  }
};

module.exports = { generateReports, getOrders, updateOrderStatus };
