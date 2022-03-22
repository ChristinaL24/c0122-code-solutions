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

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'Please input a positive integer for id.' });
  } else if (notes[id]) {
    res.status(200).json(notes[id]);
  } else if (!notes[id]) {
    res.status(404).json({ error: 'There is no note with this id, please try again.' });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
