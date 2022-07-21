const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const ExamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must be atleast 2 characters long!"],
        maxlength: [20, "Title must be at most 20 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Can't be less than free!"],
        max: [10000, "Can't be more than 10k!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [2, "Description must be atleast 2 characters long!"]
    },
    imgUrl: {
        type: String,
        required: [true, "Image is required!"],
    },
    expirationDate: {
        type: String,
        required: [true, "Position is required!"],
    },
    isExpensive: {
        type: Boolean,
        required: [true, "Peg Leg is required!"],
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye Patch is required!"],
    },
    hookHand: {
        type: Boolean,
        required: [true, "Hook Hand is required!"],
    },
}, { timestamps: true });
module.exports.Exam = mongoose.model('Exam', ExamSchema);