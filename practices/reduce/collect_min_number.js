'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  // var result = Math.min.apply(null,collection);
  var _ = require('../../mylodash/array.js');
  var result = [];
  result = _.min(collection);
  return result;

  // var _ = require('../../lodash');
  // var result = _.min(collection);
  // return result;
}

module.exports = collect_min_number;
