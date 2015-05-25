'use strict';
function triple(single) {
    var result = single * 3;

    return result;
}

var map_to_three_multiples = function(collections){
    var _ = require('../../lodash');
    var result = _.map(collections,triple);
    return result ;
};

module.exports = map_to_three_multiples;
