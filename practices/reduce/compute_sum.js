'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.sum(collection);
  // return result;

  var _ = require('../../mylodash/array.js');

  var sum = _.sum(collection);
  return sum;
}

module.exports = calculate_elements_sum;
