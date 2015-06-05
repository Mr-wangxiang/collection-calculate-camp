'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];

  for (var i = number_a; i <= number_b; i++) {
      if (number_a < number_b && i%2 === 0) {
        result.push(i);
      }
  }

      for (var i = number_a; i >= number_b; i--) {
          if (number_a > number_b && i%2 === 0) {
          result.push(i);
      }
  }

  if (number_a === number_b && number_a%2 === 0) {
          result.push(number_a);
  }

  if (number_a === number_b && number_a%2 !== 0) {
      return result;
  }

  return result;
}

module.exports = get_integer_interval_2;
