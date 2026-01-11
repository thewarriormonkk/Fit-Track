// app.js contains all business & middleware logic

const cors = require('cors');
const express = require('express');
const workoutRoutes = require('./routes/workouts');

// initialized express app
const app = express();


// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// global error middleware (add after all routes)
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        // only show stack trace in development
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

module.exports = app;