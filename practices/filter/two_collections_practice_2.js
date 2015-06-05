'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  // var _ = require('../../lodash');
  // var result = _.xor(collection_a, collection_b);
  // return result ;

    // var collection_c = [];
    // var tmp = collection_a.concat(collection_b);
    // var temp = {};
    // for (var i = 0; i < tmp.length; i ++) {
    //     (tmp[i] in temp) ? temp[tmp[i]] ++ : temp[tmp[i]] = 1;
    // }
    // for (var x in temp) {
    //     if (temp[x] == 1) {
    //     collection_c.push(x);
    //     }
    // }
    // return collection_c;
    var _ = require('../../mylodash/array.js');
    var result = [];
    _.each(collection_a,function(element){
        if (!_.exist(collection_b,element)) {
            result.push(element);
        }
    });
    return result;
}

module.exports = choose_no_common_elements;
