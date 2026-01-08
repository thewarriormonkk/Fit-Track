// app.js contains all business & middleware logic

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// initialized express app
const app = express();


// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

module.exports = app;