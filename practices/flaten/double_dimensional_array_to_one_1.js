'use strict';

function double_to_one(collection) {

  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.flattenDeep(collection);
  // return result;
    var _ = require('../../mylodash/array.js');
    var combine = collection.join().split(',');
    var result = [];
    _.each(combine,function(element){
        result.push(Number(element));
    });
    return result;
}

module.exports = double_to_one;
