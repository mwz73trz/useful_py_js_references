// one line if-else versus multi-line
const age = 47;
let ageGroup;

// one-line see if old enough to purchase alcohol
ageGroup = age > 20 ? "Can legally purchase alcohol." : "Cannot legally purchase alcohol."
console.log(ageGroup)

// multi-line
if (age > 20) {
  ageGroup = "Can legally purchase alcohol.";
}else{
  ageGroup = "Cannot legally purchase alcohol."
}
console.log(ageGroup)

// nullish coalescing(will return the side that is defined)
let somethingIs;
// one line
console.log(somethingIs ?? "Is nothing")

// multi-line with somethingIs defined
let somethingIsHere = "There is something"
if (somethingIsHere) {
  console.log(somethingIsHere);
}else{
  console.log("Is nothing")
}

// optional chaining to avoid error
const student = {
  name: "Matt",
  age: 27,
  address: {
    state: "New York"
  },
};

// LONG FORM
console.log(student && student.address && student.address.ZIPCode); // Doesn't exist - Returns undefined

// SHORTHAND
console.log(student?.address?.ZIPCode); // Doesn't exist - Returns undefined

// cast any value to boolean
!!true    // true
!!2       // true
!![]      // true
!!"Test"  // true

!!false   // false
!!0       // false
!!""      // false

// using the spread operator
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
// without spread operator
let newNums1 = nums1.concat(nums2);
console.log(newNums1)
// using spread operator
newNums2 = [...nums1, ...nums2];
console.log(newNums2)
// pushing numbers into array
let numbers = [1, 2, 3];
// without spread operator
numbers.push(4);
numbers.push(5);
console.log(numbers)
// one line with spread operator
numbers = [...numbers, 6, 7];
console.log(numbers)

// destructuring with spread operator
const contact = {
  name: "Michael",
  email: "michael@email.com",
  city: "OFallon",
  state: "IL"
};
// multi-line
const contactName = contact.name;
const contactEmail = contact.email;
const contactAddress = { city: contact.city, state: contact.state };
// one line
const { name, email, ...address } = contact;

// remove duplicates from an array
const duplicateArray = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5];
const uniqueArray = [...new Set(duplicateArray)];
console.log(uniqueArray)

// embed variable into string with back ticks
const team = "Cleveland Indians";
const sentence = `My favorite baseball team is the ${team}.`;
console.log(sentence)


