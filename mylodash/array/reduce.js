var each = require('./each.js');
function reduce(collection, fun) {

    temp = collection[0];
    each(collection, function(element, i){
        if (i == 0) {
            temp = element;
        }else{
            temp = fun(temp, element);
        }
    });
    return temp;
}

// var a = [1,2,3,4,5,6,7];
// var result = reduce(a,add);
// console.log(result);

module.exports = reduce;
