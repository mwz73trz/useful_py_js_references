// What does implicit type coercion do? Give an example.
// Implicit type coercion means a value is converted from one type to another. This takes place when the operands of expressions are of different types.
// For example, string coercion means applying + operator on a number and a string converts the number into a string automatically.

var x = 1;
var y = "2";
console.log(x + y)

// But when dealing with subtraction, the coercion works the other way. It converts a string into a number.

var x = 10;
var y = "10"
console.log(x - y)