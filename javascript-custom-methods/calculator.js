/* exported calculator */

var calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var sum = x - y;
    return sum;
  },
  multiply: function (x, y) {
    var sum = x * y;
    return sum;
  },
  divide: function (x, y) {
    var sum = x / y;
    return sum;
  },
  square: function (x) {
    var sum = x * x;
    return sum;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
};
