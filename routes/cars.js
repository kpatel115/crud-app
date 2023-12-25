// routes/cars.js
const express = require('express');
const router = express.Router();
const Car = require('../models/Cars')

// Create = Nice!
router.post('/cars', async (req, res) => {
  try {
    const requiredFields = ['make', 'model', 'year', 'color', 'engineType', 'transmissionType', 'fuelType', 'sellerContact', 'pic'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }const newCar = await Car.create(req.body);
  res.json(newCar);
} catch (error) {
  console.error('Error creating a new car: ', error);
  res.status(500).json({ error: 'Internal Server Error' })
}
});



// Read = Nice
router.get('/cars', async (req, res) => {
  try {
    const allCars = await Car.find()
    res.json(allCars)
  } catch (error) {
    console.error('Error retrieving all cars: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// read specific car = Nice
router.get('/cars/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found rawr xd ;< not mk' });
    }
    res.json(car);
  } catch (error) {
    console.error('Error getting a car by ID: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update
router.put('/cars/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ error: 'Car not able to updated rawr xd ;< not mk' });
    }
    res.json(updatedCar);
  } catch (error) {
    console.error('Error updating car by ID: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete
router.delete('/cars/:id', async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(404).json({ error: 'Car not able to be deleted rawr xd ;< not mk' });
    }
    res.json(deletedCar);
  } catch (error) {
    console.error('Error deleting car by ID: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
