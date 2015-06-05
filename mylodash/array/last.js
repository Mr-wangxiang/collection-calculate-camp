var each = require('./each.js');
var filter_in = require('./filter_in.js');
var reduce = require('./reduce.js');

function last(collection, func) {
    var result = collection;
    if (func !== undefined) {
        result = filter_in(collection, func);
    }
    var last_item;
    reduce(result,function (num_a,num_b) {
        last_item = num_b;
        return num_b;
    });

    return last_item;
}


module.exports = last;
