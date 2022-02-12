// Rules for Pure Functions

// 1) The same input ALWAYS gives the same output
const add = (x, y) => {
  return x + y;
};
console.log(add(2, 3));

// 2) No side effects (no mutations !!)

// This also means accessing the scope outside of the function makes the function impure!
const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2));

// Pure functions can not:
// Access a database, API, file system, storage, etc
// Modify the DOM
// or even log to the console

// No input state can be modified
// That is, no data should be "mutated"
// Consider all input data the to be immutable

// Impure example 1;
let x = 1;
const increment = () => (x += 1);
console.log(increment());
console.log(x);

// Impure example2
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
  array.push(data);
  return array;
};
console.log(addToArray(myArray, 4));
console.log(myArray);

// Refactored example 1
const pureIncrement = (num) => num + 1;
console.log(pureIncrement(3));
