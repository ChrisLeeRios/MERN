const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const ProductSchema = new mongoose.Schema({
    title: { type: String,
    required: [true, "Title is required!"],
    minlength: [2, "Title must be atleast 2 characters long!"] },
    price: { type: Number,
    required: [true, "Price is required!"],
    min: [0, "Can't be less than free!"] },
    description: { type: String,
        required: [true, "Description is required!"],
        minlength: [2, "Description must be atleast 2 characters long!"] }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);