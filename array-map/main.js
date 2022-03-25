const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => num * 2);
console.log('doubled:', doubled);

const toFixed = numbers.map(num => '$' + num.toFixed(2));
console.log('toFixed:', toFixed);

const upperCased = languages.map(letters => letters.toUpperCase());
console.log('upperCased:', upperCased);

const firstLetters = languages.map(letters => letters.charAt(0).toUpperCase() +
                                   letters.substring(1).toLowerCase());
console.log('firstLetters:', firstLetters);
