'use strict';
function get_charcode(element){
    return String.fromCharCode(element+96);
}
function get_result(array) {
    var result = [];
    var LENGTH = 26;
    for (var i = 0; i < array.length; i++) {
          if(array[i]>LENGTH){
              var link = '';
              var left,right,temp;
              left = String.fromCharCode(Math.ceil(array[i]/LENGTH)+95);
              var remainder = array[i]%LENGTH;
              temp = remainder === 0 ? LENGTH :remainder;
              right = get_charcode(temp);
              link = left+right;
              result[result.length] = link;
          }else{
                result[result.length] = get_charcode(array[i]);
          }
    }
    return result;
}

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  var array = [];
  if (number_a < number_b) {
      for (var i = number_a; i <= number_b; i++) {
          array[array.length] = i;
      }
      array = get_result(array);
  }

  if (number_a > number_b) {
      for (var i = number_a; i >= number_b; i--) {
          array[array.length] = i;
      }
      array = get_result(array);
  }

  if (number_a === number_b) {

      for (var i = number_a; i >= number_b; i--) {
          array[array.length] = i;
      }
      array = get_result(array);

  }
  return array;

}

module.exports = get_letter_interval_2;
