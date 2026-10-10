const mongoose = require('mongoose');

// Pseudocode:
// define a blueprint for a module (e.g. "Negotiated Research")
// every module needs a name
// it can have an optional module code (e.g. 6G6Z0006)
// every module belongs to one user, so store which user owns it
// automatically track when it was created and last updated

// Defines the structure for a module: name, optional code, and the user who owns it
const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

// Pseudocode:
// turn the blueprint into a real model called "Module"
// share it so other files can use it

// Builds the Module model from the schema and exports it
module.exports = mongoose.model('Module', moduleSchema);