const Admin = require('../models/admin');
const Staff = require('../models/Staff');
const Customer = require('../models/customer');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Unified Login Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Admin.findOne({ email });
    let role = 'admin';
    if (!user) {
      user = await Staff.findOne({ email });
      role = user ? 'staff' : null;
    }

    if (!user) {
      user = await Customer.findOne({ email });
      role = user ? 'customer' : null;
    }
    const bool = await bcrypt.compare(password, user.password);
    if (user && bool ) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role,
        token: generateToken(user._id, role),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
// Register Admin Function
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const staff = new Staff({
      name,
      email,
      password: hashedPassword,
      role: 'waiter'
    });

    // Save admin to database
    await staff.save();

    res.status(201).json({ id: staff._id, name: staff.name, email: staff.email, token: generateToken(staff._id, 'staff') });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


module.exports = { loginUser, register };
