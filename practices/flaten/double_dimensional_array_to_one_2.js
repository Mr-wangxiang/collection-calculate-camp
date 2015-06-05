'use strict';

function double_to_one(collection) {

  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.flattenDeep(collection);
  // result = _.uniq(result);
  // return result;
  var _ = require('../../mylodash/array.js');
  var combine = collection.join().split(',');
  var result = [];
  var no_repeat = [];
  _.each(combine,function(element){
      result.push(Number(element));
  });
  _.each(result,function(element){
      if (!_.exist(no_repeat,element)) {
          no_repeat.push(element);
      }
  });

  return no_repeat;
}

module.exports = double_to_one;
