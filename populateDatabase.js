const mongoose = require('mongoose')
const { cars } = require('./src/data/yourCarsData');
// Replace with your actual MongoDB connection string and database name
const connectionString = 'mongodb+srv://kpatel114:OujcLxx2rFKztiEM@carcollection.chb2apw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Define your Mongoose model schema
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

// Insert dummy data into MongoDB
Car.insertMany(cars)
  .then(() => {
    console.log('Dummy data inserted successfully!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting dummy data:', error);
    mongoose.connection.close();
  });
