// forEach() method calls a function once for every element in the array, in order

let number = [65, 44, 12, 4];
number.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

console.log(number);
