const express = require('express');
const app = express();
const data = require('./data.json');

const notes = data.notes;

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).json(notesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
