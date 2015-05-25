'use strict';

function choose_even(collection) {

  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.remove(collection, function(n) { return n % 2 == 0; });
  return result;
}

module.exports = choose_even;
