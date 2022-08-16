const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
    Title: { type: String, required: true },
    Tagline: { type: String },
    Body: { type: String },
    Pinned:{type:Boolean , default:false}
 
},{
    versionKey: false,
    timestamps: true 
})

const Notemodel = mongoose.model("notes", NoteSchema)

module.exports =  Notemodel