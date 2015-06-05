var each = require('./each.js');
var filter_in = require('./filter_in.js');
var reduce = require('./reduce.js');

function filter_out(collection, func) {
    var result = [];
    each(collection, function(element,i){
        if (!func(element,i)) {
            result.push(element)
        }
    });
    return result;
}
module.exports = filter_out





;
