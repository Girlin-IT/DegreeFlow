const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Pseudocode:
// define a blueprint for what a user looks like in the database
// every user needs a name, an email (must be unique, no two accounts sharing one), and a password
// automatically track when each user was created and last updated

// Defines the structure for a user account: name, email, and password
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});