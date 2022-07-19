const { Author } = require('../models/author.model'); //change this line
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Create something 
// Change the lines below 
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Retrieve all from database 
// Change the lines below 
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

// Retrieve one from database
// Change the lines below
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params._id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

// Update one from database
// Change the lines below
module.exports.updateAuthor = (request, response) => {
    // runValidators is needed for persiting validations
    Author.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators:true, new:true}) 
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Delete one from database
// Change the lines below
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}