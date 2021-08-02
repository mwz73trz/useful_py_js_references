// Web storage is an API that provides a way for browsers to store key-value pairs locally to the user’s browser. Using web storage makes this process way more intuitive than using cookies.
// Web storage provides two ways for storing data:
// Local storage — stores data for the client without an expiration date.
// Session storage — stores data for one session only. The data is gone when the browser is closed.

// Session Storage

// Save data to sessionStorage
sessionStorage.setItem('favoriteColor', 'gray');

// Get the color from the sessionStorage
let data = sessionStorage.getItem('favoriteColor');
console.log(data);

// Remove saved color preset from sessionStorage
sessionStorage.removeItem('favoriteColor');

// Remove ALL the saved data from sessionStorage
sessionStorage.clear();

// local storage

// Save data to localStorage
localStorage.setItem('favoriteColor', 'gray');

// Get the color from the localStorage
let data = localStorage.getItem('favoriteColor');
console.log(data);

// Remove saved color preset from localStorage
localStorage.removeItem('favoriteColor');

// Remove ALL the saved data from localStorage
localStorage.clear();