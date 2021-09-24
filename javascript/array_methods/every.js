// every() method checks if all elements in an array pass a test

let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

result = ages.every(checkAdult);

console.log(result);
