'use strict';
var map_to_four_multiples_add_one = function(collection){
    // var _ = require('../../lodash');
    // var result = _.map(collection,triple);
    // return result ;
    // var result = [];
    // for (var i = 0; i < collection.length; i++) {
    //     result.push(triple(collection[i]));
    // }
    // return result;
    var _ = require('../../mylodash/array.js');
    var result = _.map(collection, function(element){
        return (element * 4) + 1;
    });
    return result ;

};

module.exports = map_to_four_multiples_add_one;
