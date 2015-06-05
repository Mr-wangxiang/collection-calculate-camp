'use strict';

function grouping_count(collection) {

  //在这里写入代码
  // var result = {};
  //
  // for (var i = 0; i < collection.length; i++) {
  // ar count = 0;
  //
  //   if (!result[collection[i]])
  //
  // result[collection[i]] = 0;
  // f(result[collection[i]])
  // count = result[collection[i]]
  // result[collection[i]] = count+1;
  // }
  // return result;
  var temp = {};
  var _ = require('../../mylodash/array.js');
  _.each(collection, function(element){
      (element in temp) ? temp[element] ++ : temp[element] = 1;
  });
  return temp;

}

module.exports = grouping_count;
