'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  // var _ = require('../../lodash');
  // // var result = _.difference(collection_b, collection_a);
  // // result = collection_a.concat(result);
  // var result = _.union(collection_a,collection_b);
  // return result;
  var _ = require('../../mylodash/array.js');
  var result = [];
  var a_array = [];
  _.each(collection_a,function(element){
      a_array[a_array.length] = element;
  });
  _.each(collection_b,function(element){
      if (!_.exist(collection_a,element)) {
          result.push(element);
      }
  });
  return a_array.concat(result);
}

module.exports = get_union;
