'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  for (var i = number_a; i <= number_b; i++) {
      if(i%2 == 0) {

        result.push(i);
        }
    }
}

module.exports = get_integer_interval_2;
