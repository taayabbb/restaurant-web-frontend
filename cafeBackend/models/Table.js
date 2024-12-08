const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true }, // Table number
  capacity: { type: Number, required: true }, // Seating capacity
  status: { type: String, enum: ['booked', 'free'], default: 'free' }, // Status of the table
  reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', default: null }, // Reference to a reservation
});

module.exports = mongoose.model('Table', tableSchema);
