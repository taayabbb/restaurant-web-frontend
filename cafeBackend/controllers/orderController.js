const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem')

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

// Get all menu items sorted by quantity sold
const getMenuItemsBySales = async (req, res) => {
  try {
    // Aggregate order data to calculate the total sales for each menu item
    const soldItems = await Order.aggregate([
      { $unwind: '$items' }, // Deconstruct the items array
      {
        $group: {
          _id: '$items.menuItem', // Group by menuItem ID
          totalQuantity: { $sum: '$items.quantity' } // Sum the quantities sold
        }
      },
      { $sort: { totalQuantity: -1 } } // Sort by total quantity sold in descending order
    ]);

    if (soldItems.length === 0) {
      return res.status(404).json({ message: 'No sales data found.' });
    }

    // Populate menu item details for all sold items
    const menuItems = await Promise.all(
      soldItems.map(async (item) => {
        const menuItem = await MenuItem.findById(item._id);
        return {
          menuItem,
          totalSold: item.totalQuantity
        };
      })
    );

    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu items by sales', error });
  }
};

// Calculate total profits
const calculateTotalProfits = async (req, res) => {
  try {
    // Aggregate order data to calculate total quantities of each menu item sold
    const soldItems = await Order.aggregate([
      { $unwind: '$items' }, // Deconstruct the items array
      {
        $group: {
          _id: '$items.menuItem', // Group by menuItem ID
          totalQuantity: { $sum: '$items.quantity' } // Sum the quantities sold
        }
      }
    ]);

    if (soldItems.length === 0) {
      return res.status(404).json({ message: 'No sales data found. Profits cannot be calculated.' });
    }

    // Calculate total profits by fetching menu item prices
    let totalProfits = 0;

    for (const item of soldItems) {
      const menuItem = await MenuItem.findById(item._id);
      if (menuItem) {
        const profitPerItem = (menuItem.price * 3) / 100; // 3% profit
        totalProfits += profitPerItem * item.totalQuantity;
      }
    }

    res.json({ totalProfits: totalProfits.toFixed(2) }); // Rounded to two decimal places
  } catch (error) {
    res.status(500).json({ message: 'Error calculating total profits', error });
  }
};

// Calculate total revenues
const calculateTotalRevenues = async (req, res) => {
  try {
    // Aggregate order data to calculate total revenues
    const revenues = await Order.aggregate([
      {
        $group: {
          _id: null, // Group all orders together
          totalRevenue: { $sum: '$totalAmount' } // Sum the totalAmount field for all orders
        }
      }
    ]);

    // Handle the case where there are no orders
    if (revenues.length === 0) {
      return res.status(404).json({ message: 'No orders found. Revenues cannot be calculated.' });
    }

    res.json({ totalRevenue: revenues[0].totalRevenue });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating total revenues', error });
  }
};

// Function to get order history sorted by latest orders first
const  getOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer').sort({ createdAt: -1 }); // Sort by latest first
    res.json({ordersHistory:orders});
  } catch (error) {
    res.status(500).json({ message: 'Error getting orders history', error });
  }
}

module.exports = { 
  generateReports, 
  getOrders, 
  updateOrderStatus, 
  getMenuItemsBySales, 
  calculateTotalProfits, 
  calculateTotalRevenues,
  getOrderHistory };
