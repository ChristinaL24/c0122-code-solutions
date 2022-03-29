const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue = 0;
const totalSum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
console.log('totalSum:', totalSum);

const productInitialValue = 1;
const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue, productInitialValue);
console.log('product:', product);

const balance = account.reduce(function (previousValue, currentValue) {
  return (currentValue.type === 'deposit') ? previousValue + currentValue.amount : previousValue - currentValue.amount;
}, initialValue);
console.log('balance:', balance);

const intialObject = {};
const composite = traits.reduce((previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
}, intialObject);
console.log('composite:', composite);
