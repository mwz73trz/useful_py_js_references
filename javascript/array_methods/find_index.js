// findIndex() method returns the index of the first element in an array that pass a test

let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

let result = ages.findIndex(checkAdult);

console.log(result);
