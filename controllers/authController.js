const User = require('../models/authModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email and password are required' });
    }
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });   
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }   
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.json({ message: 'User registered successfully' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }   
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.profile = async (req, res) => {
    const { email } = req.query;
    try {
        const user = await User.find({ email }, '-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }           
};