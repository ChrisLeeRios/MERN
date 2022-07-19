// Change lines below 
const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:_id', ProductController.getProduct);
    app.put('/api/products/:_id', ProductController.updateProduct);
    app.delete('/api/products/:_id', ProductController.deleteProduct);
}
