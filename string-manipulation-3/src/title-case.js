/* exported titleCase */

/* Pseudocode:

Goal: The original title, but with APA Title Case Style applied.

-Create a function with its name and parameter
-Create a variable ('array') to hold the split value of the parameter 'title'
-Create a variable ('newString') and assign the value of an empty string to it
-Create a variable ('specialCases') and assign an array of strings consisting of
all the minor words
-Create a for loop that will iterate through array.length
  -Within the loop, create a storage that will hold the value of the lower case values
   of array at i
  -Create conditions within the for loop to target the special title cases
    -IF 'word' is found in our specialCases array, make it lower cased
    -If 'word' is 'javascript', return 'JavaScript'
    -If 'word' is 'api', return 'API'
    -If 'word' is either 'Javascript:' or 'javascript:', return 'JavaScript:'
    -Else, if there are no conditions, apply the slice and toUpperCase method on
     word and assign its value to 'newWord'.
    -ENSURE that these words are all being concatenated with newString and an empty space
     to add these values into our variable 'newString'
-For the dash and colon:
  -Create a condition that checks if the sentence has a colon or dash with the
   include method
  -If either are found, apply respective methods that will separate the sentence
   into two sentences. Once we have our two sentences, make the first letter after
   the dash or colon capitalized and join the two sentences together
-Ensure that the return method for each respective conditions are returned from our function
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
