const fs = require('fs');
const data = require('./data.json');
const input = process.argv[2];
const createNote = process.argv[3];

if (input === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}

if (input === 'create') {
  data.notes[data.nextId] = createNote;
  data.nextId++;
  const newNotes = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newNotes, 'utf8', function (err) {
    if (err) throw err;
  });
}
