'use strict';
function get_charcode(element){
    return String.fromCharCode(element+96);
}
function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_a < number_b) {
      for (var i = number_a; i <= number_b; i++) {
          result[result.length] = get_charcode(i);
      }
  }

  if (number_a > number_b) {
      for (var i = number_a; i >= number_b; i--) {
          result[result.length] = get_charcode(i);
      }
  }

  if (number_a === number_b) {
     result[result.length] = get_charcode(number_a);
  }
  return result;
}

module.exports = get_letter_interval;
