'use strict';
var map_to_three_multiples = function(collections){
    var _ = require('../../mylodash/array.js');
    var result = _.map(collections, function(element){
        return element * 3;
    });
    return result ;
};

module.exports = map_to_three_multiples;
