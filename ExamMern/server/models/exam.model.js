const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const ExamSchema = new mongoose.Schema({
    name: { type: String,
    required: [true, "Name is required!"],
    minlength: [2, "Name must be atleast 2 characters long!"] },

    price: { type: Number,
    required: [true, "Price is required!"],
    min: [0, "Can't be less than free!"],
    max: [1000, "Can't be more than 1000!"] },

    imgUrl: { type: String,
        required: [true, "Description is required!"],
        minlength: [2, "Description must be atleast 2 characters long!"] }
}, { timestamps: true });
module.exports.Exam = mongoose.model('Exam', ExamSchema);