'use strict';
var _ = require('../../../mylodash/array.js');

function average_uneven(collection) {

    var result = [];
    result = _.filter(collection,function (element) {
        return element%2 !== 0;
    });
    var average = _.sum(result)/result.length;
    return average;
}

module.exports = average_uneven;
