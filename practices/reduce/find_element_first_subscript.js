'use strict';

function calculate_elements_sum(collection, element_index) {
  //在这里写入代码

  // var _ = require('../../lodash');
  // return _.indexOf(collection,element);
  // return collection.indexOf(element);
  var each = require('../../mylodash/array/each.js');
  var index = 0;
  for (var i = 0; i < collection.length; i++) {
      if (collection[i] === element_index ) {
          index = i;
          break;
      }
  }
  return index;
}
module.exports = calculate_elements_sum;
