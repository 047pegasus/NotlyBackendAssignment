"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.createNote = exports.getAllNotes = void 0;
const noteModel_1 = __importDefault(require("../models/noteModel"));
const idGenerator_1 = require("../utils/idGenerator");
// Controller functions
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield noteModel_1.default.find();
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getAllNotes = getAllNotes;
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    const nid = (0, idGenerator_1.generateNoteId)();
    const note = new noteModel_1.default({
        nid,
        title, // Include the title here
        content,
    });
    try {
        const newNote = yield note.save();
        res.status(201).json(newNote);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createNote = createNote;
// Other controller functions remain unchanged
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nid = req.params.nid;
    try {
        const existingNote = yield noteModel_1.default.findOne({ nid });
        if (!existingNote) {
            return res.status(404).json({ message: 'Note not found error!!' });
        }
        else {
            yield noteModel_1.default.updateOne({ nid }, req.body);
            res.json({ message: 'Note updated successfully!!' });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nid = req.params.nid;
    try {
        const noteExists = yield noteModel_1.default.findOne({ nid });
        if (!noteExists) {
            return res.status(404).json({ message: "Note not found to be deleted error !!" });
        }
        else {
            yield noteModel_1.default.deleteOne({ nid });
            res.json({ message: "Note deleted successfully!!" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.deleteNote = deleteNote;
