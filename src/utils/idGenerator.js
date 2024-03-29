"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNoteId = void 0;
// Function to generate unique note IDs
let noteCounter = 1; // Start from 1
let noteBatch = 0;
const generateNoteId = () => {
    const id = `NT${pad(noteBatch, 1)}${pad(noteCounter, 4)}`;
    noteCounter++;
    if (noteCounter > 9999) {
        noteBatch++;
        noteCounter = 1; // Reset the counter for the next batch
    }
    return id;
};
exports.generateNoteId = generateNoteId;
// Function to pad numbers with leading zeros
const pad = (num, size) => {
    let s = num.toString();
    while (s.length < size)
        s = "0" + s;
    return s;
};
