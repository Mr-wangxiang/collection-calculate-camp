'use strict';
var _ = require('../../../../mylodash/array.js');

var is_exist_element = function(collection,element){
    var index_even = [];
    index_even = _.filter(collection, function (element, i) {
        return i%2 === 0;
    });
    return _.exist(index_even,element);

};
module.exports = is_exist_element;
