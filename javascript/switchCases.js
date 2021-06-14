const number = 10

// long way
switch (number) {
  case 1:
    theFunction();
    break;
  case 2:
    thisFunction();
    break;
  case 3:
    thatFunction();
    break;
}

// simplified
var cases = {
  1: theFunction,
  2: thisFunction,
  3: thatFunction
};
cases[number]();