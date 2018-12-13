//loop over given [array] backwards, return index of first time [tvalue] appears in array. If [tvalue] never occurs, return [-1]
function lastIndexOf(array, targetValue) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (!array) {
      return -1
    } else if (array[i] === targetValue){
      return i;
    }
  }
  return -1
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);