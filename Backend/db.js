const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/save-notes"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected");
    })
}

module.exports = connectToMongo;