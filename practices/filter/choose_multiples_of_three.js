'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.remove(collection, function(n) { return n % 3 == 0; });
  return result;
}

module.exports = choose_multiples_of_three;
