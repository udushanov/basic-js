const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let res = [];
    let spaces = 0;
    message = message.toUpperCase().split('');
    key = message.map((el, idx) => {
      if (el === ' ') {
        spaces++;
        return el;
      } else {
        return key.toUpperCase()[(idx - spaces) % key.length]
      }
    });

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        let charCode = message[i].charCodeAt(0) - 65 + (key[i].charCodeAt(0) - 65);
        message[i] = String.fromCharCode(charCode % 26 + 65);
      }
      res.push(message[i]);
    }
    return this.isDirect ? res.join('') : res.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let res = [];
    let spaces = 0;
    message = message.toUpperCase().split('');
    key = message.map((el, idx) => {
      if (el === ' ') {
        spaces++;
        return el;
      } else {
        return key.toUpperCase()[(idx - spaces) % key.length]
      }
    });

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        let charCode = message[i].charCodeAt(0) + 65 - (key[i].charCodeAt(0) - 65);
        message[i] = String.fromCharCode(charCode % 26 + 65);
      }
      res.push(message[i]);
    }
    return this.isDirect ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
