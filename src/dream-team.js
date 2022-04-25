const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arr = []
  if (Array.isArray(members)){
    members.map(item => {
      if (typeof item === 'string') {
        let deleteWhitespaces = item.trim()
        let names = deleteWhitespaces[0].toUpperCase()
        arr.push(names)
      }
    })
    return arr.sort().join('').toString()
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
