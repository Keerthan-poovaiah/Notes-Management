const express = require('express');
const router = express.Router();

const { getNotes, createNote, updateNote, deleteNote, getNoteById } = require('../controllers/notesController');

router.get('/notes', getNotes);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);
router.get('/notes/:id', getNoteById);

module.exports = router;