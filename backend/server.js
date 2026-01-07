
require('dotenv').config();
const express = require('express');

// express app
const app = express();

// routes
app.get('/', (req, res) => {
    res.json({ message: "get all workouts" });
});

// listen for request
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening for request on port: ${port}`)
});