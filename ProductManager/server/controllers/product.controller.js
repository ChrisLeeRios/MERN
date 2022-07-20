const { Product } = require('../models/product.model'); //change this line
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Create something 
// Change the lines below 
module.exports.createProduct = (request, response) => {
    const { title, price, description, imgUrl, expirationDate, isExpensive } = request.body;
    Product.create({
        title,
        price,
        description,
        imgUrl,
        expirationDate,
        isExpensive
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Retrieve all from database 
// Change the lines below 
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

// Retrieve one from database
// Change the lines below
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params._id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

// Update one from database
// Change the lines below
module.exports.updateProduct = (request, response) => {
    // runValidators is needed for persiting validations
    Product.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators:true, new:true}) 
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Delete one from database
// Change the lines below
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}