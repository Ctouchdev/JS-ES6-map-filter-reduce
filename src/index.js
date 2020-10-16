//Map -Create a new array by doing something with each item in an array.

// const double = (x) => {
//   return x * 2;
// };

// const newNumbers = numbers.map(double);

// var newNumbers = [];

// numbers.forEach(x => {
//   newNumbers.push(x * 2)
// });

// const newNumbers = numbers.map(x => {
//   return x*2
// })

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const numFilter = numbers.filter(num => {
//   return num < 5
// })

// var numFilter = [];

// numbers.forEach(num => {
//   if (num > 5) {
//     numFilter.push(num)
//   }
// })

// console.log(numFilter)

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;

// numbers.forEach(num => {
//   newNumber += num
// })

// var newNumber = numbers.reduce((accumulator, num) => {
//   return accumulator + num
// })

// console.log(newNumber);

//Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// var newNumber = numbers.find(num => {
//   return num > 10
// })

// console.log(newNumber)

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(num => {
//   return num === 56
// })

// console.log(newNumber)

import emojipedia from "./emojipedia";

const description = emojipedia.map((item) => {
  return item.meaning.substring(0, 100);
});

console.log(description);
