// Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let’s take an example to see this behavior,

function sum(a, b, c) {
  return a + b + c;
}

const nums = [15, 25, 35]

console.log(sum(...nums))