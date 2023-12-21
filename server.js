// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const router = require('./routes/cars')

const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection

const mongoURI = 'mongodb+srv://kpatel114:R7tvHnASCDmCJToZ@carcollection.chb2apw.mongodb.net/CarCollection?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Once the connection is open, log a success message
db.once('open', () => {
  console.log('Connected to MongoDB successfully');

  // Define your routes and other server logic here
  app.use('/', router)

  // get all the cars


  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});