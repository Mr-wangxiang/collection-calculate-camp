'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var _ = require('../../lodash');
  // var result = _.difference(collection_b, collection_a);
  // result = collection_a.concat(result);
  var result = _.union(collection_a,collection_b);
  return result;
}

module.exports = get_union;
