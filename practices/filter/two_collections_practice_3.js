'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var _ = require('../../mylodash/array.js');
  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.remove(collection_a, function(n) { return n % collnection_b == 0; });
  // return result;
  var result = [];
  _.each(collection_a, function(element_a){
      _.each(collection_b,function(element_b){
          if (element_a%element_b === 0) {
              result.push(element_a);
          }
      });
  });

  return result;
}

module.exports = choose_divisible_integer;
