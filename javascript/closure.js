// A closure in JavaScript means an inner function has access to the variables of the outer function even after the outer function has returned.
// Here createCounter() is the outer function and increment() is the inner one. 

function createCounter() {
  let counter = 0;

  function increment() {
    counter ++;
    console.log(counter)
  }
  return increment;
}

const add = createCounter();

add();
add();
add();