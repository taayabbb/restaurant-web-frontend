const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  dietaryOptions: [{ type: String }],
  isSpecial: { type: Boolean, default: false },
  status: { type: String, enum: ['available', 'out of stock'], default: 'available' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
