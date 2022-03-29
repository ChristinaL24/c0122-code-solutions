import React from 'react';
import ReactDOM from 'react-dom';

const greeting = React.createElement('h1', null, 'Hello, React!');

ReactDOM.render(greeting, document.getElementById('root'));
