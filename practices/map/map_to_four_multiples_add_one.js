'use strict';
function triple(single) {
    var result = (single * 4) + 1;

    return result;
}

var map_to_four_multiples_add_one = function(collection){
    var _ = require('../../lodash');
    var result = _.map(collection,triple);
    return result ;
};

module.exports = map_to_four_multiples_add_one;
