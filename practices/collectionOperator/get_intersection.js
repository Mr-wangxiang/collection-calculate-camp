'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.intersection(collection_b, collection_a);
  // return result;
  var _ = require('../../mylodash/array.js');
  var result = [];
  _.each(collection_b,function(element){
      if (_.exist(collection_a,element)) {
          result.push(element);
      }
  });
  return result;
}

module.exports = get_intersection;
