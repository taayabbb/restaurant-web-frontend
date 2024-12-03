const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  loyaltyPoints: { type: Number, default: 0 },
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', customerSchema);
