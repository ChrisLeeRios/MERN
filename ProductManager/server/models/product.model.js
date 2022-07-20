const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const ProductSchema = new mongoose.Schema({
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
        type: Date
    },
    isExpensive: {
        type: Boolean
    },
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);