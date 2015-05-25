'use strict';
function sortNumber(a,b) {
    return a - b;
var rank_desc = function(collection){
    var result = collection.sort(sortNumber);
    return result;
};

module.exports = rank_desc;
