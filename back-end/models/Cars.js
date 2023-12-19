// models/Car.js
const mongoose = require('mongoose');
const {v4 : uuidv4} = require('uuid')

const newId = uuidv4()

const carSchema = new mongoose.Schema({
  id: newId,
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
