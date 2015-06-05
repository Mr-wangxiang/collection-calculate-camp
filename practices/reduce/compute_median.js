'use strict';
function cal_median(collection){
    var result = 0;
    var LENGTH = collection.length;
    if (collection.length %2 === 0) {
        result = (collection[LENGTH/2-1] + collection[LENGTH/2])/2;
      }else {
          result = collection[(LENGTH + 1)/2 - 1];
      }
    return result;
}
function compute_median(collection) {
  //在这里写入代码
  var _ = require('../../mylodash/array.js');
  var result = 0;
  var array = [];
  _.each(collection, function (element) {
      array[array.length] = element;
  });
  array = _.array_sort(array);
  result = cal_median(array);
  return result;
}

module.exports = compute_median;
