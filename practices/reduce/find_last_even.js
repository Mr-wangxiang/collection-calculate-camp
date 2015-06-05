'use strict';
function get_even(element){
    return element%2 === 0;
}
function find_last_even(collection) {
  //在这里写入代码
  // var _ = require('../../lodash');
  // var index = _.findLastIndex(collection, function(n) {
  //   return n%2 == 0;
  // });
  // return collection[index];
  var _ = require('../../mylodash/array.js');
  var result = [] ;
  result = _.filter(collection, function (element) {
      return element%2 === 0;
  }) ;
  var last_even = _.last(result);

  return last_even;


}

module.exports = find_last_even;
