'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  // var result = Math.max.apply(null,collection);
  // return result;
  // var _ = require('../../lodash');
  // var result = _.max(collection);
  // return result;
  var _ = require('../../mylodash/array.js');
  var result = [];
  result = _.max(collection);
  return result;
}

module.exports = collect_max_number;
