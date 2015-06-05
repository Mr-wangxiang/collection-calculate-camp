'use strict';
var _ = require('../../mylodash/array.js');
function collect_all_even(collection) {


  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.remove(collection, function(n) { return n % 2 == 0; });
  var result = [];
  result = _.filter(collection,function(element){
      return element%2 === 0;
  });

  return result;
}


module.exports = collect_all_even;
