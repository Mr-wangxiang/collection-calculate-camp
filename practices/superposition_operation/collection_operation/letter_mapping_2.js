'use strict';
function from_char_code(num) {
    return String.fromCharCode(num+96);
}
function average_to_letter(collection) {

  //在这里写入代码
  var _ = require('../../../mylodash/array.js');
  var array = [];
  var result = 0;
  _.each(collection, function (element) {
      array.push(element);
  });
  var sum = _.sum(array);
  var average = Math.ceil(sum/array.length);
  result = from_char_code(average);
  return result;
}

module.exports = average_to_letter;
