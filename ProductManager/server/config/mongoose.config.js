const mongoose = require('mongoose');

//can change whats said after localhost/
mongoose.connect("mongodb://localhost/productmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));