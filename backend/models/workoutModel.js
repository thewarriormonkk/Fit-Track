const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    reps: {
        type: Number,
        required: [true, 'Reps is required'],
        min: [1, 'Reps must be greater than 0']
    },
    load: {
        type: Number,
        required: [true, 'Load is required'],
        min: [0, 'Load must be >= 0']
    }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);