const express = require('express');
const Staff = require('../models/Staff.js');

const router = express.Router();
//router for adding a staff member
router.post('/add', async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//router for getting all staff members
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//router for updating the staff member
router.put('/update/:id', async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//router for deletung a staff member
router.delete('/delete/:id', async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Staff member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
