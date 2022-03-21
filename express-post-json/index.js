const express = require('express');
const app = express();

var nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arrayGrades = [];
  for (const id in grades) {
    arrayGrades.push(grades[id]);
  }
  res.json(arrayGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
