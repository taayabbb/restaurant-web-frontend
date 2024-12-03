const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['chef', 'waiter', 'kitchen staff'], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  assignedTables: [{ type: Number }], // For waiters
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Staff', staffSchema);
