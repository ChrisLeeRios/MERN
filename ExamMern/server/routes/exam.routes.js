// Change lines below 
const ExamController = require('../controllers/exam.controller');
module.exports = function(app){
    app.get('/api', ExamController.index);
    app.post('/api/exams', ExamController.createExam);
    app.get('/api/exams', ExamController.getAllExams);
    app.get('/api/exams/:_id', ExamController.getExam);
    app.put('/api/exams/:_id', ExamController.updateExam);
    app.delete('/api/exams/:_id', ExamController.deleteExam);
}
