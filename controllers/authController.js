const User = require('../models/User');

// Pseudocode:
// take the name, email and password out of the request body
// make a new User from them
// save it (the pre-save hook in User.js scrambles the password for us)
// reply "created" with the user's id, name and email, but never the password
// if anything goes wrong, reply with an error instead of crashing

async function registerUser(req, res) {
    try {
        // Pull the three things we need out of what the user sent
        const { name, email, password } = req.body;

        const user = new User({ name, email, password });
        await user.save();

        // 201 means "created". We only send back safe details.
        res.status(201).json({
            message: 'Account created',
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.log('Signup error:', error.message);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = { registerUser };