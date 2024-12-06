const express = require('express');
const {
  getReservations,
  confirmReservation,
  assignTableToReservation,
  getOccupancy
} = require('../controllers/reservationController');

const router = express.Router();

// Get all reservations
router.get('/', getReservations);

// Confirm a reservation
router.patch('/:id/confirm', confirmReservation);

// Assign a table to a reservation
router.patch('/:id/assign-table', assignTableToReservation);

// Get table occupancy
router.get('/occupancy', getOccupancy);

module.exports = router;
