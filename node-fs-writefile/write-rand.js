
const fs = require('fs');
const data = Math.random().toString();

fs.writeFile('random.txt', data + '\n', 'utf8', function (data, err) {
  if (err) {
    console.error(err);
  }
});

// '\n' puts the output value onto a new line //
