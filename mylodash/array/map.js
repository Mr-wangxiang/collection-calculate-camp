var each = require('./each.js');
function map(collection,func){

	var array = [];
    each(collection, function(element){
        array.push(func(element));
    });
	return array;
}
// var a = [1,2,3,4,5,-1];
// var result = map(a, triple);
// console.log(result);
module.exports = map;
