// using while loop to countdown to launch
let countDown = (seconds) => {
  while(seconds >= 0) {
    console.log("There are " + seconds + " seconds left until liftoff!");
    seconds--;
  }
  return "Lift Off!";
}
console.log(countDown(10));