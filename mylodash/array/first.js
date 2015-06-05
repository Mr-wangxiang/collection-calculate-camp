var each = require('./each.js');
var filter = require('./filter.js');
var reduce = require('./reduce.js');

function first(collection, func) {
    var result = collection;
    if (func !== undefined) {
        return result = filter(collection, func);
    }
    var first_item;
    reduce(result,function (num_a,num_b) {
        first_item = num_a;
        return num_a;
    });

    return first_item;
}


module.exports = first;
