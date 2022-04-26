const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('')
  let res
  for(let i=0; i < arr.length; i++ ){
    if (arr[i] < arr[i+1]) {      
      arr.splice(arr.indexOf(arr[i]), 1);
      res = arr.join('')
      break
    } else {
      res = arr[0]
    }
  } 
  return +res
}

module.exports = {
  deleteDigit
};
