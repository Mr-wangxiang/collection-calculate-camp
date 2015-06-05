var each = require('./each.js');

function filter(collection, func) {
    var result = [];
    each(collection, function(element,i){
        if (func(element,i)) {
            result.push(element)
        }
    });
    return result;
}
// function isEven(element) {
//     return element%2 == 0;
// }
// var a = [1,2,3,4,5,6,7,9,8,0];
// var result = filter(a, isEven);
// console.log(result);
module.exports = filter;
