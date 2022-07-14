// const { default: mongoose } = require("mongoose")
const mongoose  = require("mongoose")

const JokeSchema = new mongoose.Schema({
    punchline : String
});

const Joke = mongoose.model("Joke",JokeSchema)

module.exports = Joke;