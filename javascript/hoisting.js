// Hoisting is moving functions to the top
// funciton is called before it is defined

hello();

function hello() {
  console.log("Hello, Michael!")
}

// for a varible it is not possible

console.log(myName)
var myName = "Michael"
