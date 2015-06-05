'use strict';
// function sortNumber(a,b) {
//     return b - a;
// }
var rank_asc = function(collection) {
    // var result = collection.sort(sortNumber);
    // return result;
    var _ = require('../../mylodash/array.js');
    var result = _.array_sort(collection);
    var asc_array = [];
    for (var i = result.length -1 ; i >=0; i--) {
        asc_array[asc_array.length] = result[i];
    }
    return asc_array;
};

module.exports = rank_asc;
