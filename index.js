const express = require("express")
const connect = require("./configs/db")
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8080
const NoteRouter  =  require("./router/NoteRouter")
const cors = require('cors')



app.use(cors())
app.use(express.json())
app.use("/", NoteRouter )



app.listen(PORT ,async() => {
    try {

        connect()
        console.log(`Listeing on ${PORT}`)
    
    }
    catch {(err) => {
        
    }}
})

// Model.find({}).sort({ createdAt: 'asc' }).exec();

