var reduce = require('./reduce.js');
function sum(collection){

	var sum = 0;
	reduce(collection, function(num_a,num_b){
		sum = num_a + num_b;
		return sum;
	});
	return sum;
}

module.exports = sum;
