// check multiple conditions
const number = 1;
// long way
if(number == 1 || number == 2 || number == 3) {
  console.log("Long way to find a number!");
}

// short way
if([1, 2, 3].includes(number)) {
  console.log("A shorter way to find a number.")
}

// assign multiple values 
let num1, num2;
// long way
num1 = 1;
num2 = 2;

// short way
[num1, num2] = [1, 2]

// using with object
aboutMe = {
  name: "Michael",
  age: 47
};
// long way
let longName = aboutMe.name;
let longAge = aboutMe.age;

// short way
let { shortName, shortAge } = aboutMe;

// swapping variables
let x = 1;
let y = 2;
// long way
let temp = x;
console.log(temp)
x = y;
console.log(x)
y = temp;
console.log(y);

// short way
[x, y] = [y, x]
console.log("X is now: " + x + " and Y is now: " + y)