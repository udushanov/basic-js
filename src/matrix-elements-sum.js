const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let k = matrix[0].length;
  let sum = 0;
  let min = 0
  let arr = matrix.flat();
  for(let i=0; i < arr.length; i++) {
    sum =sum + arr[i];
    if(arr[i] == 0 && i < arr.length - k) {
      min = min + arr[i+k]; 
    }
  }

  return sum - min;
}

module.exports = {
  getMatrixElementsSum
};
