require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

const express = require('express');

// pseudocode:
// create an express app
// pick the port to listen on
// start listening and log a message so we know it worked

// the express app
const app = express();

// if there is a port defined in .env, use it, otherwise use 3000
const port = process.env.PORT || 3000;

// when someone visits the homepage
//send back a short msg to check that the server is answering
app.get('/', (req, res) => {
  res.send('Server is running');
});

// start the server and wait for requests
app.listen(port,() => {
  console.log(`Server is running on port ${port}`)
})