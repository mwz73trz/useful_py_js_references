// A promise is an object that may produce a value in the future with either a resolved value or a reason why it was not resolved.
// A promise is in one of the three possible states: fulfilled, rejected, or pending.

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Hello, world!");
  }, 2000);
}, reject => {});

promise.then(result => console.log(result));