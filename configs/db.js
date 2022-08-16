const mongoose = require("mongoose")
require('dotenv').config()

const mongodburl = process.env.MongoDb


const connect = () => {
    return mongoose.connect(mongodburl, {
        useNewUrlParser: true,
    })
}


module.exports= connect