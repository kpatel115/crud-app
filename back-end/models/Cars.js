// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
  engineType: String,
  transmissionType: String,
  fuelType: String,
  sellerContact: String,
  pic: String,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
