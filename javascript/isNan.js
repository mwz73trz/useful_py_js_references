// isNan function

function toPounds(kilos) {
  if (isNaN(kilos)) {
    return 'Not a number! Cannot be a weight!';
  }
  return kilos * 2.2;
}

console.log(toPounds('this is a test'))
console.log(toPounds('100'))