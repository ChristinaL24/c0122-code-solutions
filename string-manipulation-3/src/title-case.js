/* exported titleCase */

/* Pseudocode:

Goal: The original title, but with APA Title Case Style applied.

*/

function titleCase(title) {

  var array = title.split(' ');
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    if (!(word.length < 4)) {
      var newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      if (newWord === 'Javascript') {
        newWord = 'JavaScript';
      }
      newString = newString + ' ' + newWord;
    }
    if (word.length < 4) {
      newWord = word.toLowerCase();
      newString = newString + ' ' + newWord;
    }
  }
  return newString.slice(1);
}
