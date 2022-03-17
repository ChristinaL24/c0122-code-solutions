// const fs = require('fs'); //
const data = require('./data.json');
const input = process.argv[2];

if (input === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}
