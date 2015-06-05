'use strict';
function find_first_even(collection) {
    //在这里写入代码
    // var _ = require('../../lodash');
    // var index = _.findIndex(collection, function(n) {
    //   return n%2 == 0;
    // });
    // return collection[index];
    // var result = 0;
    // for (var i = 0; i < collection.length; i++) {
    //     if ( collection[i]%2 === 0 ) {
    //         result = collection[i];
    //         break;
    //     }
    // }
    // return result;
    var _ = require('../../mylodash/array.js');
    var result = [] ;
    result = _.filter(collection, function (element) {
        return element%2 === 0;
    }) ;
    var first_even = _.first(result);
    return first_even;
}

module.exports = find_first_even;
