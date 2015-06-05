'use strict';
var _ = require('../../../mylodash/array.js');

var even_asc_odd_desc = function(collection){
    var even_array = [];
    var compute_array = [];
    _.each(collection, function (element) {
        if (element%2 === 0) {
            even_array.push(element);
        }else{
            compute_array.push(element);
        }
    });
    even_array = _.array_sort(even_array);
    compute_array = _.array_sort(compute_array);
    var result_compute = [];
    for (var i = compute_array.length -1; i >= 0; i--) {
        result_compute.push(compute_array[i]);
    }
    return even_array.concat(result_compute);
};
module.exports = even_asc_odd_desc;
