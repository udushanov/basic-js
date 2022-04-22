const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const toArray = n.toString().split('')
  let sum = 0
  for (let i = 0; i < toArray.length; i++){
    sum = sum + Number(toArray[i])
  }
  if (sum > 9) {
    toSecondArray = sum.toString().split('')
    let lastSum = 0
    for (let i = 0; i < toSecondArray.length; i++){
      lastSum = lastSum + Number(toSecondArray[i])
    }
    return lastSum
  }
  return sum  
}

module.exports = {
  getSumOfDigits
};
