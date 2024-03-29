// Function to generate unique note IDs
let noteCounter = 1; // Start from 1
let noteBatch = 0;
export const generateNoteId = (): string => {
  const id = `NT${pad(noteBatch, 1)}${pad(noteCounter, 4)}`;
  noteCounter++;
  if (noteCounter > 9999) {
    noteBatch++;
    noteCounter = 1; // Reset the counter for the next batch
  }
  return id;
};

// Function to pad numbers with leading zeros
const pad = (num: number, size: number): string => {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
};
