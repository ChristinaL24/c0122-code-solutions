const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

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
    res.status(400).json({ error: 'Please input a positive integer for id' });
  } else if (notes[id]) {
    res.status(200).json(notes[id]);
  } else if (!notes[id]) {
    res.status(404).json({ error: 'Cannot find note with id ' + id });
  }
});

app.use(express.json());

let id = data.nextId;

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json(({ error: 'Content is a required field' }));
  } else if (req.body.content !== undefined) {
    notes[id] = req.body;
    notes[id].id = id;
    id++;
    const errorData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', errorData, 'utf8', function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(201).json(notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'Please input a positive integer for id' });
  } else if (!notes[id]) {
    res.status(404).json({ error: 'Cannot find note with id ' + id });
  }
  const errorData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', errorData, 'utf8', function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    } else {
      delete notes[id];
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'Please input a positive integer for id' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'Content is a required field' });
  }
  const errorData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', errorData, 'utf8', function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    } else {
      notes[id] = req.body;
      notes[id].id = id;
      res.status(200).json(notes[id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
