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
        
        // Pseudocode:
        // if the name, email or password is missing or empty,
        // stop here and tell the user what's wrong (400 = their mistake, not ours)

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email and password are all required' });
        }

        const user = new User({ name, email, password });
        await user.save();

        // 201 means "created". We only send back safe details.
        res.status(201).json({
            message: 'Account created',
            user: { id: user._id, name: user.name, email: user.email }
        });
        } catch (error) {
        // Pseudocode:
        //   if MongoDB says "duplicate key" (error code 11000), the email is taken,
        //   so tell the user that clearly
        //   otherwise it's something unexpected, so log it and send a generic error

        // 11000 is MongoDB's code for a duplicate on a unique field (our email)
        if (error.code === 11000) {
            return res.status(409).json({ message: 'An account with that email already exists' });
        }

        console.log('Signup error:', error.message);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

// Pseudocode:
// take the email and password from the request body
// if either is missing, stop and say so
// look up a user with that email
// if there isn't one, say "invalid email or password"
// ask the user's checkPassword whether the typed password matches
// if it doesn't, say the same "invalid email or password"
// otherwise reply "logged in" with safe details (never the password)

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are both required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatches = await user.checkPassword(password);
        if (!passwordMatches) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Logged in',
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.log('Login error:', error.message);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = { registerUser, loginUser };