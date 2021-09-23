// find the average of numbers

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 2, 3, 4));
