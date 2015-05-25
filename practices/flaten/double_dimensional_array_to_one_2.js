'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.flattenDeep(collection);
  result = _.uniq(result);
  return result;
}

module.exports = double_to_one;
