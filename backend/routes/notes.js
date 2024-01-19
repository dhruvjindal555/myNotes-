const express = require('express')
const router = express.Router()
const fetchuser = require("../middleware/fetchuser")
const Notes = require('../modals/Notes')


// ROUTE :1 Get all the notes using GET :/api/notes/fetchallnotes . Login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })

        res.json(notes)

    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }
})

// ROUTE :2 ADD notes using POST :/api/notes/addnote . Login required 
router.post('/addnote', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();


        res.json(savedNote)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }
})

// ROUTE :3 update notes using PUT :/api/notes/updatenotes . Login required 
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body

        const newNote = {}
        if(title){newNote.title=title}
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}

        let note = await Notes.findById(req.params.id)
        if(!note){ return res.status(404).send("Not found")}

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        res.json({note})
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }
})
// ROUTE :4 delete note using DELETE :/api/notes/deletenote . Login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {

     
        let note = await Notes.findById(req.params.id)
        if(!note){ return res.status(404).send("Not found")}

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed")
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({note})
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }
})
module.exports = router 