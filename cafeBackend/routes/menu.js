const express = require('express');
const Menu = require('../models/Menu.js'); // Assuming you have a Menu model
const router = express.Router();
//router for adding a new dish
router.post('/add', async (req, res) => {
  try {
    const newDish = new Menu(req.body);//creatiung  anew instance from request body
    const savedDish = await newDish.save();//saves the new dish in the database 
    res.status(201).json(savedDish);//sends back the saved dish as the response
  } catch (err) {//if the process involves an error it would throe an error 
    res.status(500).json({ error: err.message });//the 500 is an internal server error
  }
});
//getting all the dishes
router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find();//retrieves all the dishes from the database 
    res.status(200).json(menu);//sends back the dish as a json response 
  } catch (err) {//if the process encoun ters any error 
    res.status(500).json({ error: err.message });//handle the error by giving 505 internal server error 
  }
});
// updating the dish
router.put('/update/:id', async (req, res) => {
  try {
    const updatedDish = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,//update the data and returns the new dish 
    });
    res.status(200).json(updatedDish);//sends back the updated dish
  } catch (err) {//if this process encounters any error 
    res.status(500).json({ error: err.message });//handles error 
  }
});
//deleting the dish
router.delete('/delete/:id', async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);//deletes the dish by ID 
    res.status(200).json({ message: 'Dish deleted successfully' });//successfull response
  } catch (err) {//if the process encounters an error 
    res.status(500).json({ error: err.message });//handle error 
  }
});
//marking dish as special
router.put('/mark-special/:id', async (req, res) => {
  try {
    const specialDish = await Menu.findByIdAndUpdate(
      req.params.id,
      { isSpecial: true },
      { new: true }
    );
    res.status(200).json(specialDish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//marking a dish as out os stcok using boolean 
router.put('/mark-out-of-stock/:id', async (req, res) => {
  try {
    const outOfStockDish = await Menu.findByIdAndUpdate(
      req.params.id,
      { isOutOfStock: true },
      { new: true }
    );
    res.status(200).json(outOfStockDish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
