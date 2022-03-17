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
    var word = array[i].toLowerCase();
    if (specialCases.includes(word)) {
      var specialCaseWord = word.toLowerCase();
      newString = newString + ' ' + specialCaseWord;
    } else if (word === 'javascript') {
      var js = 'JavaScript';
      newString = newString + ' ' + js;
    } else if (word === 'api') {
      var api = 'API';
      newString = newString + ' ' + api;
    } else if (word === 'Javascript:' || word === 'javascript:') {
      var colonJs = 'JavaScript:';
      newString = newString + ' ' + colonJs;
    } else {
      var newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      newString = newString + ' ' + newWord;
    }
  }
  if (newString.includes(':')) {
    var colonSplit = (newString.slice(1, 2).toUpperCase() + newString.slice(2)).split(': ');
    var colonUpperCase = colonSplit[1].slice(0, 1).toUpperCase() + colonSplit[1].slice(1);
    colonSplit[1] = colonUpperCase;
    var colonSentence = colonSplit.join(': ');
    if (colonSentence.includes('-')) {
      var dashSplit = (colonSentence.slice(0, 1).toUpperCase() + colonSentence.slice(1)).split('-');
      var dashUpperCase = dashSplit[1].slice(0, 1).toUpperCase() + dashSplit[1].slice(1);
      dashSplit[1] = dashUpperCase;
      var dashSentence = dashSplit.join('-');
      return dashSentence;
    }
    return colonSentence;
  }
  return newString.slice(1, 2).toUpperCase() + newString.slice(2);
}
