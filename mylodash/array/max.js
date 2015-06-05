var reduce = require('./reduce.js');
function max(collection){

	var max_num;
	reduce(collection, function(num_a,num_b){
		if (num_a > num_b) {
			max_num = num_a;
		}else{
			max_num = num_b;
		}
		return max_num;
	});
	return max_num;
}

module.exports = max;
