// filter() method creates an array filled with all array elements that passs a test

let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
let result = ages.filter(checkAdult);

console.log(result);
