function _() {

}
 _.array_sort = function(collection) {
    var num;
    for (var i = 0; i < collection.length; i++) {
        for (var x = i + 1; x < collection.length; x++) {
            if (collection[x] < collection[i]) {
                num = collection[i];
                collection[i] = collection[x];
                collection[x] = num;
            }
        }
    }
    return collection;
}

 _.each = function(collection, func){
	for (var i = 0; i < collection.length; i++) {
		func(collection[i],i);
	}
}

 _.exist = function(collection, num){

	var result = false;
	_.each(collection,function(element){
		if (num === element) {
			result = true;
		}
	});
	return result;
}

 _.filter = function(collection, func) {
    var result = [];
    _.each(collection, function(element,i){
        if (func(element,i)) {
            result.push(element)
        }
    });
    return result;
}

_.first = function (collection, func) {
    var result = collection;
    if (func !== undefined) {
        return result = _.filter(collection, func);
    }
    var first_item;
    _.reduce(result,function (num_a,num_b) {
        first_item = num_a;
        return num_a;
    });

    return first_item;
}

 _.last = function(collection, func) {
    var result = collection;
    if (func !== undefined) {
        result = _.filter(collection, func);
    }
    var last_item;
    _.reduce(result,function (num_a,num_b) {
        last_item = num_b;
        return num_b;
    });

    return last_item;
}

 _.map = function(collection,func){

	var array = [];
    _.each(collection, function(element){
        array.push(func(element));
    });
	return array;
}

 _.max = function(collection){

	var max_num;
	_.reduce(collection, function(num_a,num_b){
		if (num_a > num_b) {
			max_num = num_a;
		}else{
			max_num = num_b;
		}
		return max_num;
	});
	return max_num;
}

 _.min = function(collection){

	var min_num;
	_.reduce(collection, function(num_a,num_b){
		if (num_a < num_b) {
			min_num = num_a;
		}else{
			min_num = num_b;
		}
		return min_num;
	});
	return min_num;
}

 _.reduce = function(collection, fun) {

    temp = collection[0];
    _.each(collection, function(element, i){
        if (i == 0) {
            temp = element;
        }else{
            temp = fun(temp, element);
        }
    });
    return temp;
}

 _.sum = function(collection){

	var sum = 0;
	_.reduce(collection, function(num_a,num_b){
		sum = num_a + num_b;
		return sum;
	});
	return sum;
}

// module.exports = {
//     '_.each':require('./array/_.each.js'),
//     'exist':require('./array/exist.js'),
//     '_.filter':require('./array/_.filter.js'),
//     'first':require('./array/first.js'),
//     'last':require('./array/last.js'),
//     'map':require('./array/map.js'),
//     'max':require('./array/max.js'),
//     'min':require('./array/min.js'),
//     '_.reduce':require('./array/_.reduce.js'),
//     'sum':require('./array/sum.js'),
//     'array_sort':require('./array/array_sort.js')
//
module.exports = _;
