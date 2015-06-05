'use strict';

function calculate_elements_sum(collection, element_index) {
  //在这里写入代码
  // var _ = require('../../lodash');
  // return _.lastIndexOf(collection,element);
  var _ = require('../../mylodash/array.js');
  var index = 0;
  _.each(collection,function (element, i) {
      if (element === element_index) {
          index = i;
      }
  });
  return index;
}

module.exports = calculate_elements_sum;
