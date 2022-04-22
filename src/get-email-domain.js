const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let reversedEmail = email.split('').reverse()
  for (let i = 0; i < reversedEmail.length; i++) {
    if (reversedEmail[i] === '@') {
      let res = reversedEmail.slice(0, i).reverse().join('')
      return res
    }
  }
}

module.exports = {
  getEmailDomain
};
