const express = require("express")
const Notemodel = require("../model/note")

const router = express.Router()


router.get("/", async (req,res) => {
    try {
        const notedata = await Notemodel.find().lean()
        res.status(200).json(notedata)        
    }
    catch {(err) => {
        res.status(500).send(err)
    }}
})

router.get("/sort", async (req, res) => {
    try {
        let { page, size } = req.query
        if (page == undefined) {
            page=1
        }
        size = 6     
        const notedata = await Notemodel.find()
            .limit(size)
            .skip(size * (page-1))
            .sort({ updatedAt: 'desc' }).exec();
        
        res.status(200).json(notedata)

    }
    catch {
        (err) => {

            res.status(500).send(err)
        }
    }
})



router.get("/:id", async (req, res) => {
    try {
     
        const notedata = await Notemodel.findOne({_id:req.params.id}).lean()
        res.status(200).json(notedata)
    }
    catch {
        (err) => {
            res.status(500).send(err)
        }
    }
})



router.post("/", async (req, res) => {
    try {
        const notedata = await Notemodel.create(req.body)
        res.status(200).json(notedata)
    }
    catch {
        (err) => {
            res.status(500).send(err)
        }
    }
})



router.patch("/:id", async (req, res) => {
    try {
       const _id = req.params.id
        const notedata = await Notemodel.findByIdAndUpdate(_id, req.body, { new: true })
        res.status(200).json(notedata)

    }
    catch {
        (err) => {

            res.status(500).send(err)
        }
    }
})



router.delete("/:id", async (req, res) => {
    try {
     
        console.log(req.params.id)
        const notedata = await Notemodel.findByIdAndDelete(req.params.id)

        res.status(200).json(notedata)

    }
    catch {
        (err) => {

            res.status(500).send(err)
        }
    }
})





module.exports = router