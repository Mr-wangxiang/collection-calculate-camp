'use strict';
var _ = require('../../../mylodash/array.js');

function hybrid_operation_to_uneven(collection) {

    var result = [];
    _.each(collection,function (element) {
        if (element%2 !== 0) {
            result.push((element*3) + 5);
        }
    });
    var sum = _.sum(result);
    return sum;
}

module.exports = hybrid_operation_to_uneven;
