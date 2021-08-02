// NaN means “Not-a-Number”. This means a value that is not officially a number in JavaScript.
// What may be confusing is that type-checking NaN with typeof() function results in Number.
// To avoid confusion, use isNaN() to check if the type of a value is NaN or not number.

console.log(typeof(NaN))