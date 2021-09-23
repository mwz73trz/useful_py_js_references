// check if an array is empty

const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

console.log(isNotEmpty([1, 2, 3]));
console.log(isNotEmpty([]));

// shuffle an array

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));
