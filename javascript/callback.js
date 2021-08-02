// A callback function is a function that is passed as an argument to another function. This function is executed inside the function to which it’s passed as to “call back” when some action has been completed.

function greetName(name) {
  console.log('Hello ' + name);
}

function askName(callback) {
  let name = prompt('Enter your name.');
  callback(name);
}

askName(greetName)