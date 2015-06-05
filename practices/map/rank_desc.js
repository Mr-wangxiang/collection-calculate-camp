'use strict';
// function sortNumber(a,b) {
//     return a - b;
// }
var rank_desc = function(collection){
    // var result = collection.sort(sortNumber);
    // return result;
    var _ = require('../../mylodash/array.js');
    var result = _.array_sort(collection);
    return result;
};

module.exports = rank_desc;
