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
function compute_chain_median(collection) {
  //在这里写入代码
  var _ = require('../../mylodash/array.js');
  var split_array = collection.split('->');
  var result = [];
  _.each(split_array,function(element){
      result.push(Number(element));
  });
  var sort_array = _.array_sort(result);
  var median_num = cal_median(sort_array);
  return median_num;
}

module.exports = compute_chain_median;
