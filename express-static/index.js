const express = require('express');
const app = express();

const path = require('path');

// eslint-disable-next-line no-unused-vars
const absolutePath = path.join('_dirname', 'public');

// eslint-disable-next-line no-unused-vars
const middleware = app.use(express.static('public'));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
