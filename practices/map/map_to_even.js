'use strict';
function triple(single) {
    var result = single * 2;

    return result;
}

function map_to_even(collection){
    var _ = require('../../lodash');
    var result = _.map(collection,triple);
    return result ;

}
module.exports = map_to_even;
