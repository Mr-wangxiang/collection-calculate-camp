var reduce = require('./reduce.js');
function min(collection){

	var min_num;
	reduce(collection, function(num_a,num_b){
		if (num_a < num_b) {
			min_num = num_a;
		}else{
			min_num = num_b;
		}
		return min_num;
	});
	return min_num;
}
// var a = [1,2,3,4,5,-1];
// var result = min(a);
// console.log(result);
module.exports = min;
