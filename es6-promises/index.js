const takeAChance = require('./take-a-chance');

const myName = takeAChance('Christina');

myName.then(myName => {
  console.log(myName);
});

myName.catch(error => {
  console.error(error.message);
});
