'use strict';
var _ = require('../../../mylodash/array.js');
function get_charcode(element){
    return String.fromCharCode(element+96);
}
function get_result(element) {

    var LENGTH = 26;

    var link = '';
    var left,right,temp;
    left = String.fromCharCode(Math.ceil(element/LENGTH)+95);
    var remainder = element%LENGTH;
    temp = remainder === 0 ? LENGTH :remainder;
    right = get_charcode(temp);
    link = left+right;
    return link;
}

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

function median_to_letter(collection) {

    var array = [];
    _.each(collection, function (element) {
        array.push(element);
    });
    array = _.array_sort(array);
    var result = 0;
    result = Math.ceil(cal_median(array));
    var result_median = get_result(result);
    return result_median;

}

module.exports = median_to_letter;
