function howManyHundreds(num) {
  var a = num;
  var b = num % 100;
  var c = a - b;
  return c / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
