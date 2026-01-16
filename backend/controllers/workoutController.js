const AppError = require('../utils/appError');
const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// @desc Get all workouts
// @route GET /api/workouts
// @access Private
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
}

// @desc Get a single workout
// @route GET /api/workouts/:id
// @access Private
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError('Invalid ID format. Please provide a valid MongoDB ID', 400);
    }

    const workout = await Workout.findById(id);
    if (!workout) {
        throw new AppError('No workout found', 404);
    }
    res.status(200).json(workout);
}

// @desc Create a new workout
// @route POST /api/workouts
// @access Private
const createWorkout = async (req, res, next) => {
    try {
        const { title, reps, load } = req.body;

        // add to db
        const workout = await Workout.create({
            title,
            reps,
            load
        });
        res.status(201).json(workout);
    } catch (error) {
        // pass raw error to the global handler
        next(error);
    }
}

// @desc Update a workout
// @route PATCH /api/workouts/:id
// @access Private
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError('Invalid ID format. Please provide a valid MongoDB ID', 400);
    }

    const workout = await Workout.findByIdAndUpdate(id, payload, { new: true, runValidators: true });

    if (!workout) {
        throw new AppError('No workout found', 404);
    }
    res.status(200).json(workout);
}

// @desc Delete a workout
// @route DELETE /api/workouts/:id
// @access Private
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError('Invalid ID format. Please provide a valid MongoDB ID', 400);
    }
    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
        throw new AppError('No workout found', 404);
    }

    res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}