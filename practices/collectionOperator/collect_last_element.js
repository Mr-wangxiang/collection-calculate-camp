'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.last(collection);
  return result;
}

module.exports = collect_last_element;
