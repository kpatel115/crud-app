// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/cars');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect('mongodb+srv://kpatel114:29Hch1KnNQ24Fwb6@carcollection.chb2apw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Define routes here
app.use('/routes', carRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
