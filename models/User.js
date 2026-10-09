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

// Pseudocode:
// right before a user gets saved to the database:
//   if the password hasn't been touched, skip this and carry on (it's already hashed)
//   otherwise, scramble the password with bcrypt (this adds the random salt for us)
//   swap the plain password for the scrambled one
//   carry on with the save

// Runs automatically before every save, so a plain password never reaches the database
userSchema.pre('save', async function () {
    // Only hash if the password is new or has been changed
    if (!this.isModified('password')) {
        return;
    }

    // 10 is the number of salt rounds: higher is slower and harder to crack
    this.password = await bcrypt.hash(this.password, 10);
});

// Pseudocode:
// turn the blueprint into a real model called "User"
// share it so other files (routes, controllers) can use it

// Builds the User model from the schema and exports it
module.exports = mongoose.model('User', userSchema);
