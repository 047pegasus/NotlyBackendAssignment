import mongoose, { Schema, Document } from 'mongoose';

interface Note extends Document {
  nid: string;
  title: string;
  content: string;
}

const NoteSchema = new Schema<Note>({
  nid: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const NoteModel = mongoose.model<Note>('Note', NoteSchema);

export default NoteModel;
