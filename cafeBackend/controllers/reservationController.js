const Reservation = require('../models/Reservation');

// Get all reservations
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('customer');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Confirm a reservation
const confirmReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reservation.findByIdAndUpdate(
      id,
      { status: 'reserved' },
      { new: true }
    ).populate('customer');

    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update table assignment
const assignTableToReservation = async (req, res) => {
  const { id } = req.params;
  const { tableNumber } = req.body;

  try {
    const reservation = await Reservation.findByIdAndUpdate(
      id,
      { tableNumber },
      { new: true }
    ).populate('customer');

    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Track table occupancy
const getOccupancy = async (req, res) => {
  try {
    const occupancy = await Reservation.aggregate([
      { $match: { status: { $in: ['reserved', 'completed'] } } },
      { $group: { _id: '$tableNumber', count: { $sum: 1 } } }
    ]);
    res.json(occupancy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Count reservations
const countReservations = async (req, res) => {
  try {
    // Count reservations
    const todayReservationsCount = await Reservation.countDocuments({});

    res.json({ todayReservations: todayReservationsCount });
  } catch (error) {
    res.status(500).json({ message: 'Error counting today\'s reservations', error });
  }
};

module.exports = {
  getReservations,
  confirmReservation,
  assignTableToReservation,
  getOccupancy,
  countReservations
};
