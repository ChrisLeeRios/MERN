// Change lines below 
const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:_id', AuthorController.getAuthor);
    app.put('/api/authors/:_id', AuthorController.updateAuthor);
    app.delete('/api/authors/:_id', AuthorController.deleteAuthor);
}
