/* exported filterOutStrings */
function filterOutStrings(values) {

  var newStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newStrings.push(values[i]);
    }
  }
  return newStrings;
}
