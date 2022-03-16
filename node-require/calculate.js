const add = require('./add');
const subtract = require('./substract');
const multiply = require('./multiply');
const divide = require('./divide');

const arrayTwo = process.argv[2];
const input = process.argv[3];
const arrayFour = process.argv[4];

if (input === 'plus') {
  console.log('Result:', add(Number(arrayTwo), Number(arrayFour)));
}

if (input === 'minus') {
  console.log('Result:', subtract(Number(arrayTwo), Number(arrayFour)));
}

if (input === 'times') {
  console.log('Result:', multiply(Number(arrayTwo), Number(arrayFour)));
}

if (input === 'over') {
  console.log('Result:', divide(Number(arrayTwo), Number(arrayFour)));
}
