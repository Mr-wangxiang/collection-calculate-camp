'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};

  for (var i = 0; i < collection.length; i++)
  {
	var count = 0;

    if (!result[collection[i]])

		result[collection[i]] = 0;
	if(result[collection[i]])
		count = result[collection[i]]
		result[collection[i]] = count+1;
  }
  return result;
}

module.exports = grouping_count;
