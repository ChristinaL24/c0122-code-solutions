/* exported countdown */
function countdown(number) {
  var value = [];
  for (var i = number; i >= 0; i--) {
    value.push(i);
  }
  return value;
}
