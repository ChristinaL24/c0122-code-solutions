const fs = require('fs');
const data = require('./data.json');
const input = process.argv[2];

if (input === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}

if (input === 'create') {
  const createNote = process.argv[3];
  data.notes[data.nextId] = createNote;
  data.nextId++;
  const newNotes = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newNotes, 'utf8', function (err) {
    if (err) throw err;
  });
}

if (input === 'delete') {
  const deleteId = process.argv[3];
  delete data.notes[deleteId];
  const deleteNotes = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', deleteNotes, 'utf8', function (err) {
    if (err) throw err;
  });
}

if (input === 'update') {
  const updateId = process.argv[3];
  const newSentence = process.argv[4];
  data.notes[updateId] = newSentence;
  const updatedNotes = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedNotes, 'utf8', function (err) {
    if (err) throw err;
  });
}
