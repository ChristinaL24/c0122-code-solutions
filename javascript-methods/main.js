var five = 5;
var twenty = 20;
var eleven = 11;

var maximumValue = Math.max(five, twenty, eleven);
console.log('maximumValue:', maximumValue);

var heroes = ['Scarlet Witch', 'Iron Man', 'Starfire', 'Raven'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [

  {
    title: 'Green Eggs and Ham',
    author: 'Dr.Seuss'
  },
  {
    title: 'Matilda',
    author: 'Roald Dahl'
  },
  {
    title: 'Random Book',
    author: 'Random Author'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavsScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Christina Le';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
