'use strict';
var _ = require('../../../../mylodash/array.js');

var calculate_average = function(collection){
    var array = [];
    _.each(collection,function(element){
        array.push(element);
    });
    var average = 0;
    var sum = 0;
    if (array.length%2 === 0) {
        sum = _.sum(array);
        average = sum/array.length;
    }else{
        sum = _.sum(array);
        average = Math.ceil(sum/array.length);
    }
    return average;

};
module.exports = calculate_average;
