'use strict';
var _ = require('../../../mylodash/array.js');

function hybrid_operation(collection) {

    var result = [];
    result = _.map(collection,function (element) {
            return element*3 + 2;
    });
    var sum = _.sum(result);
    return sum;
}

module.exports = hybrid_operation;
