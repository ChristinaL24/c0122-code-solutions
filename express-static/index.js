const express = require('express');
const app = express();

const path = require('path');

const absolutePath = path.join(__dirname, 'public');

app.use(express.static(absolutePath));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
