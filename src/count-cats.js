const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const res = {}
  const arr = [].concat(...matrix)
  arr.forEach(i => res[i] = (res[i] || 0) + 1)
  if (res['^^'] === undefined) return 0
  else return res['^^']
}

module.exports = {
  countCats
};
