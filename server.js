const express = require('express');
const mongoose= require('mongoose');

const logger = require('./middleware/logging');
const authMiddleware = require('./middleware/authMiddleware');

const notesRoute =require('./routes/notesRoute');
const authRoute = require('./routes/authRoute');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notesapp')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(logger);

app.use('/api', authRoute);
app.use('/api',authMiddleware, notesRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});