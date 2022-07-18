const mongoose = require('mongoose');

// Change all lines below to match the models for current project
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);