const express = require('express');
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: "get all workouts" });
});

// GET a workout
router.get('/:id', (req, res) => {
    res.json({ message: "get a single workout" });
});

// POST a new workout
router.post('/', (req, res) => {
    res.json({ message: "created a new workout" });
});

// UPDATE workout detail(s)
router.patch('/:id', (req, res) => {
    res.json({ message: "workout updated" });
});

router.delete('/:id', (req, res) => {
    res.json({ message: "deleted a workout" });
});


module.exports = router;

