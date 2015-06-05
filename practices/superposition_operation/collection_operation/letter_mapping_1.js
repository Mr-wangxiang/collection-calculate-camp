'use strict';
var _ = require('../../../mylodash/array.js');

function from_char_code(num) {
    return String.fromCharCode(num+96);
}

function even_to_letter(collection) {

  var array = [];
  var result = [];
  _.each(collection, function (element) {
      array[array.length] = element;
  });
  _.each(collection, function (element) {
      if (element %2 === 0 ) {
          result[result.length] = from_char_code(element);
      }
  });
  return result;
}

module.exports = even_to_letter;
