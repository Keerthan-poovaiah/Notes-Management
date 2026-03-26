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
    const { title, content, userId } = req.body;
    if(!title || !content || !userId) {
        return res.status(400).json({ message: 'Title, content and userId are required' });
    }
    try {
        const note = new Note({ title, content, userId });
        await note.save();
        res.json(note);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const note = await Note.findByIdAndUpdate(id, updates, { returnDocument: after });
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

exports.getNoteById = async (req, res) => {
    const { userId } = req.query;
    try {
        const note = await Note.findOne({ userId });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(note);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }

};