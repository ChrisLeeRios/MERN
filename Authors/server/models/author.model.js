const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
    required: [true, "Name is required!"],
    minlength: [3, "Name must be atleast 3 characters long!"] }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);