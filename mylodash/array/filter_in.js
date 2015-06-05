var each = require('./each.js');

function filter_in(collection, func) {
    var result = [];
    each(collection, function(element,i){
        if (func(element,i)) {
            result.push(element)
        }
    });
    return result;
}
module.exports = filter_in;
