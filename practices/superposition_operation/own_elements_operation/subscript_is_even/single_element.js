'use strict';
var _ = require('../../../../mylodash/array.js');

var single_element = function(collection){
    var index_even = [];
    index_even = _.filter(collection, function (element,i) {
        return (i+1)%2 === 0;
    });
    var result = [];
    _.each(index_even,function(element){
        if (!_.exist(result,element)) {
            result.push(element);
        }
    });
    return  !_.exist(result,3) ? [] : result ;


};
module.exports = single_element;
