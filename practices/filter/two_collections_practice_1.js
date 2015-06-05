'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = [];
  // result = _.intersection(collection_a,collection_b);
  // return result;
  var _ = require('../../mylodash/array.js');
  var result = [];
  _.each(collection_a,function(element){
      if (_.exist(collection_b,element)) {
          result.push(element);
      }
  });
  return result;
}

module.exports = choose_common_elements;
