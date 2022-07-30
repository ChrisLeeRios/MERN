const { Exam } = require('../models/exam.model'); //change this line
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Create something 
// Change the lines below 
module.exports.createExam = (request, response) => {
    const { title, price, description, imgUrl, expirationDate, isExpensive, eyePatch, hookHand } = request.body;
    Exam.create({
        title,
        price,
        description,
        imgUrl,
        expirationDate,
        isExpensive,
        eyePatch,
        hookHand
    })
        .then(exam => response.json(exam))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Retrieve all from database 
// Change the lines below 
module.exports.getAllExams = (request, response) => {
    Exam.find({})
        .then(exams => response.json(exams))
        .catch(err => response.json(err))
}

// Retrieve one from database
// Change the lines below
module.exports.getExam = (request, response) => {
    Exam.findOne({_id:request.params._id})
        .then(exam => response.json(exam))
        .catch(err => response.json(err))
}

// Update one from database
// Change the lines below
module.exports.updateExam = (request, response) => {
    // runValidators is needed for persisting validations
    Exam.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators:true, new:true}) 
        .then(updatedExam => response.json(updatedExam))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Delete one from database
// Change the lines below
module.exports.deleteExam = (request, response) => {
    Exam.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}