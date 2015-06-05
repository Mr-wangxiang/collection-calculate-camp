'use strict';
function get_charcode(element){
    return String.fromCharCode(element+96);
}
function get_result(collection) {
    var _ = require('../../mylodash/array.js');
    var result = [];
    var LENGTH = 26;
    _.each(collection, function(element){
        if(element>LENGTH){
            var link = '';
            var left,right,temp;
            left = String.fromCharCode(Math.ceil(element/LENGTH)+95);
            var remainder = element%LENGTH;
            temp = remainder === 0 ? LENGTH :remainder;
            right = get_charcode(temp);
            link = left+right;
            result[result.length] = link;
        }else{
            result[result.length] = get_charcode(element);
        }
    });
    return result;
}

var number_map_to_word = function(collection){
    var _ = require('../../mylodash/array.js');
    var array = [];
    _.each(collection, function(element){
        array[array.length] = element;
    });
    array = get_result(array);
    return array;
};

module.exports = number_map_to_word;
