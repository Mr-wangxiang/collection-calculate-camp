'use strict';
function choose_no_repeat_number(collection) {

  //在这里写入代码
  var _ = require('../../mylodash/array.js');
  var result = [];
  _.each(collection,function(element){
      if (!_.exist(result,element)) {
          result.push(element);
      }
  });
  return result;
    // var _ = require('../../lodash');
    //
    // var result = _.uniq(collection);
    // return result;
 }

module.exports = choose_no_repeat_number;
