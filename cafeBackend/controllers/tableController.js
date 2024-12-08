const Table = require('../models/Table');

// Get information for all tables or a specific table
const getTableInfo = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      // Fetch a specific table by ID
      const table = await Table.findById(id).populate('reservation', 'date time customer');
      if (!table) {
        return res.status(404).json({ message: 'Table not found' });
      }
      res.json(table);
    } else {
      // Fetch all tables
      const tables = await Table.find().populate('reservation', 'date time customer');
      res.json(tables);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching table info', error });
  }
};
// Update a table's information
const updateTableInfo = async (req, res) => {
    const { id } = req.params;
    const { number, capacity, status, reservation } = req.body;
  
    try {
      // Find and update the table
      const table = await Table.findByIdAndUpdate(
        id,
        { number, capacity, status, reservation },
        { new: true, runValidators: true } // Return updated document and validate inputs
      );
  
      if (!table) {
        return res.status(404).json({ message: 'Table not found' });
      }
  
      res.json({ message: 'Table info updated successfully', table });
    } catch (error) {
      res.status(400).json({ message: 'Error updating table info', error });
    }
  };

  module.exports = {
    getTableInfo,
    updateTableInfo
  }