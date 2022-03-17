
const fs = require('fs');
const data = Math.random().toString();

fs.writeFile('./random.txt', data, function (data, err) {
  if (err) {
    console.error(err);
  }
});
