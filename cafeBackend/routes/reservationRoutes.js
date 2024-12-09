const express = require('express');
const {
  getReservations,
  assignTableToReservation,
  getOccupancy,
  countReservations,
  completeReservation
} = require('../controllers/reservationController');

const router = express.Router();

// Get all reservations
router.get('/', getReservations);

// Complete a reservation
router.patch('/:id/confirm', completeReservation);

// Assign a table to a reservation
router.patch('/:id/assign-table', assignTableToReservation);

// Get table occupancy
router.get('/occupancy', getOccupancy);

router.get('/count-reservations', countReservations);

module.exports = router;
