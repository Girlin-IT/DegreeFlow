const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Pseudocode:
// when someone sends a POST to /signup, hand the request to registerUser
// when someone sends a POST to /login, hand the request to loginUser

// POST because signing up sends new data to the server
router.post('/signup', registerUser);
// POST because the password is sent in the body, never in the address bar
router.post('/login', loginUser);

module.exports = router;
