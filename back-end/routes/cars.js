// routes/cars.js
const express = require('express');
const router = express.Router();
const Car = require('../models/Cars')

// Create
router.post('/cars', async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.json(newCar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update
router.put('/cars/id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete
router.delete('/cars/:id', async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndRemove(req.params.id);
    res.json(deletedCar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
