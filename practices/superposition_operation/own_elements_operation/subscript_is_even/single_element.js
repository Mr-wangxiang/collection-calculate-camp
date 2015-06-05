'use strict';
var _ = require('../../../../mylodash/array.js');
// function remove_element(index,array) {
//     if(index >= 0 && index < array.length) {
//         for(var i=index; i<array.length; i++) {
//             array[i] = array[i+1];
//         }
//             array.length = array.length-1;
//     }
//     return array;
// }
var single_element = function(collection){
    var index_even = [];
    index_even = _.filter(collection, function (element,i) {
        return (i+1)%2 === 0;
    });
    var result = [];
    var temp = {};
    _.each(index_even,function (element,i) {
       temp[element+'_'] = temp[element+'_'] || 0;
       temp[element+'_'] = temp[element+'_'] + 1;
    });
    for (var x in temp) {
        if (temp[x] == 1) {
        result.push(parseInt(x));
        }
    }
    return result ;


};
module.exports = single_element;
