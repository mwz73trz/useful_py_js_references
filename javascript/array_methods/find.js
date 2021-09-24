// find() method returns the value of the first element in an array that pass a test

let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}
let result = ages.find(checkAdult);

console.log(result);
