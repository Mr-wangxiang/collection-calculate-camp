'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  result = _.intersection(collection_a,collection_b);  
  return result;
}

module.exports = choose_common_elements;
