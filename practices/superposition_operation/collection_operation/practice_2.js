'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var _ = require('../../../mylodash/array.js');
  var result = [];
  _.each(collection,function (element) {
      if (element%2 !== 0) {
          result.push((element*3) + 2);
      }
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;
