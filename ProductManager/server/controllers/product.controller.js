const { Product } = require('../models/product.model'); //change this line
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Create something 
// Change the lines below 
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
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
    Product.findOneAndUpdate({_id: request.params._id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

// Delete one from database
// Change the lines below
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}