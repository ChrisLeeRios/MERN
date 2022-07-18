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