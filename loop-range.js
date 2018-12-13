function range(start, end, step) {
  //create array
  var rangeArray = [];
  //state conditional circumstances, if any evaluate to TRUE do not proceed. If all are FALSE, proceed to else
  if (end === null || start === null || start > end || step < 0){
    rangeArray = [];
  } else {
    //loop over the array beginning at START, while i is less or equal to END, increasing in increments of start + step
    for (var i = start; i <= end; i = i + step){
      //add an item to the end of rangeArray i times.
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

