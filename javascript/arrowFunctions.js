// Arrow Functions
let name = "Michael";
// function key word
function longGreeting(name) {
  console.log(`Hello, ${name}`);
}
longGreeting(name);

// arrow function
const shortGreeting = name => console.log(`Hello to ${name} using an Arrow Function.`);
shortGreeting(name);

// with arrow functions the key word return can be omitted
const myNumber = 10;
// using keyword function and return
function myNumSquared(myNumber) {
  return myNumber ** 2;
}
console.log(myNumSquared(myNumber))

// using arrow function with no return
const myNumHalved = myNumber => myNumber / 2;
console.log(myNumHalved(myNumber));

// arrow functions with loops
const numbers = [1, 2, 3, 4, 5]
// long loop
for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// arrow function to loop as above
numbers.forEach(number => console.log(number));

// default values
// using function parameters
// long way
function longFavTeam(team) {
  if(team === undefined) {
    console.log("My favortie team is the Cleveland Indians");
  }else{
    console.log(`My favorite team is the ${team}`);
  }
}
longFavTeam("Cincinnati Reds");
longFavTeam();

// short way
function shortFavColor(color = "Blue") {
  console.log(`My favorite color is ${color}`);
}
shortFavColor();
shortFavColor("Red")

// using arrow function
const goBy = (nickname = "Zero") => console.log(`My nickname is ${nickname}`);
goBy();
goBy("Dummy");