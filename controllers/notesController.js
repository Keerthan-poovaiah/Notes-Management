const Note= require('../models/notesModel');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createNote = async (req, res) => {
    const { title, content, createdAt} = req.body;
    if(!title || !content || !createdAt) {
        return res.status(400).json({ message: 'Title, content and createdAt are required' });
    }
    try {
        const note = new Note({ title, content, createdAt });
        await note.save();
        res.json(note);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, createdAt } = req.body;
    try {
        const note = await Note.findByIdAndUpdate(id, { title, content, createdAt }, { new: true });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(note);
    }   
    catch (err) {
        res.status(400).json({ message: err.message });
    }   
};

exports.deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(note);
    }   
    catch (err) {
        res.status(400).json({ message: err.message });
    }   
};
