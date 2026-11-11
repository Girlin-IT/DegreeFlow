const express = require('express');
const { registerUser } = require('../controllers/authController');

const router = express.Router();

// Pseudocode:
//   when someone sends a POST to /signup, hand the request to registerUser

// POST because signing up sends new data to the server
router.post('/signup', registerUser);

module.exports = router;
