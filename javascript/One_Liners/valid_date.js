// check if date is valid or not

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

console.log(isDateValid("December 17, 1995 03:24:00"));

// find the day of the year

const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

console.log(dayOfYear(new Date()));

// find the number of days bewtween two days

const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

console.log(dayDif(new Date("1973-06-16"), new Date("2021-06-16")));
