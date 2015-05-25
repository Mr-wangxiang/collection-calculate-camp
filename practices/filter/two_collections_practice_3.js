'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.remove(collection_a, function(n) { return n % collnection_b == 0; });
  return result;
}

module.exports = choose_divisible_integer;
