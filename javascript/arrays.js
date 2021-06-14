// put values into array
const player = { name: "Joey Votto", team: "Cincinnati Reds", position: "First Base" };
const player2 = { name: "Francisco Lindor", team: "New York Mets", position: "Shortstop" };

// long way
let playerInfo = [];
for(let key in player) {
  playerInfo.push(player[key]);
}
console.log(playerInfo);

// short way
const player2Info = Object.values(player2);
console.log(player2Info);

// find something in an array
const cars = [
  { make: "Ford", model: "Mustang" },
  { make: "Chevrolet", model: "Camaro" }
];

// long way
let mustangMake;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].model === "Mustang") {
    mustangMake = cars[i];
  }
}
console.log(mustangMake);

// short way
camaroMake = cars.find((car) => car.model === "Camaro");
console.log(camaroMake);

// check if an item is in an array
let colors = ["red", "blue", "green"];
// using indexOf() long way
const findBlue = colors.indexOf("blue") > -1
console.log(findBlue)

// using includes() short way
const findGreen = colors.includes("green")
console.log(findGreen)
