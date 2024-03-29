import { Request, Response } from 'express';
import NoteModel from '../models/noteModel';
import { generateNoteId } from '../utils/idGenerator';

// Controller functions
export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await NoteModel.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const nid = generateNoteId();

  const note = new NoteModel({
    nid,
    title, // Include the title here
    content,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Other controller functions remain unchanged
export const updateNote = async (req: Request, res: Response) => {
  const nid = req.params.nid;

  try {
    const existingNote = await NoteModel.findOne({ nid });
    if(!existingNote){
      return res.status(404).json({ message: 'Note not found error!!' });
    }
    else{
      await NoteModel.updateOne({ nid }, req.body);
      res.json({ message: 'Note updated successfully!!' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const nid = req.params.nid;

  try {
    const noteExists = await NoteModel.findOne({ nid });
    if(!noteExists){
      return res.status(404).json({ message: "Note not found to be deleted error !!" });
    }
    else{
      await NoteModel.deleteOne({ nid });
      res.json({ message: "Note deleted successfully!!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
