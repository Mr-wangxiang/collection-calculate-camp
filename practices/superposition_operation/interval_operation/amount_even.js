'use strict';
var _ = require('../../../mylodash/array.js');

function amount_even(collection) {
    var result = [];
    result = _.filter(collection,function (element) {
        return element%2 === 0;
    });
    var sum = _.sum(result);
    return sum;
}

module.exports = amount_even;
