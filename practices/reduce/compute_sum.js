'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.sum(collection);
  return result;
}

module.exports = calculate_elements_sum;
