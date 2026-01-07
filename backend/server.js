
require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// listen for request
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening for request on port: ${port}`)
});