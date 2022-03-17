/* exported titleCase */

/* Pseudocode:

Goal: The original title, but with APA Title Case Style applied.

*/

function titleCase(title) {
  var array = title.split(' ');
  var newString = '';
  var specialCases = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by',
    'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < array.length; i++) {

    var word = array[i];

    var newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    if (specialCases.includes(word)) {
      newWord = word.toLowerCase();
    }
    if (newWord === 'Javascript') {
      newWord = 'JavaScript';
    }
    newString = newString + ' ' + newWord;
  }
  return newString.slice(1);
}
