'use strict';
function each(collection, func) {
    for (var i = 0; i < collection.length; i++) {
        func(collection[i],i);
    }
}
function filter(collection, func) {
    var result = [];
    each(collection, function(element, i) {
        if (func(element, i)) {
            result.push(element);
        }
    });
    return result;
}

var even_group_calculate_average = function(collection){
    var even_array = [];
        var result_array = [];
        even_array = filter(collection, function(element, i){
            return (i+1)%2 === 0 && element %2 === 0
        });
        var temp = {};
        each(even_array,function(element){
            temp[(element+'').length] = temp[(element+'').length] || [];
            temp[(element+'').length].push(element);
        });
        for(var key in temp) {
            var sum = 0;
            each(temp[key], function(element){
                sum +=element;
            });
            result_array.push(sum/temp[key].length);
        }

        return result_array.length ===0 ? [0] : result_array;
};
module.exports = even_group_calculate_average;
