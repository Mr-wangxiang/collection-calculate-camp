var each = require('./each.js');
function exist(collection, num){

	var result = false;
	each(collection,function(element){
		if (num === element) {
			result = true;
		}
	});
	return result;
}
module.exports = exist;
