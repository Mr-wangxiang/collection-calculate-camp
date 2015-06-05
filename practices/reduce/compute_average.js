'use strict';

function compute_average(collection) {
  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.sum(collection);
  // return result/collection.length;
  var _ = require('../../mylodash/array.js');
  var sum = 0;
  sum = _.reduce(collection, function (a, b) {
      return a + b;
  });
  var average = sum/collection.length;
  return average;
}

module.exports = compute_average;
