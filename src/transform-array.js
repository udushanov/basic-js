const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr) || !arr) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }  else if ( arr === undefined || arr === null ){
    throw new CustomError('Error');
  }   else if(!Array.isArray(arr) && arr.length === 0){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
}  else {
    let newArray = [];
    for(var i=0; i < arr.length; i++){
      if(arr[i] === '--discard-prev'){
        if (i === 0) {

        } else if (i > 1 && arr[i-2] === '--discard-next') {

        } else {
          newArray.pop();
        }
      } else if(arr[i] === '--double-prev'){
        if (i === 0) {

        } else if (i > 1 && arr[i-2] === '--discard-next') {

        } else {
          newArray.push(arr[i-1]);
        }
      } else if(i > 0 && arr[i-1] === '--discard-next'){
        
      } else if (arr[i] === '--discard-next') {

      } else if (arr[i] === '--double-next') {
        if (arr[arr.length-1] === arr[i]) {

        } else {
          newArray.push(arr[i+1]);
        }
      } else {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
}

module.exports = {
  transform
};
