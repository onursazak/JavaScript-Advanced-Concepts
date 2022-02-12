// Currying

// Concept from lambda calculus

// Currying takes a function that receives more than one parameter
// and breaks it into a series uf unary (one parameter) functions

// Therefore, a curried function only takes one parameter at a time

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
// console.log(mySandwich);

// It works but thats gettign ugly and nested further we go
// Let's refactor:

// const buildSammy = (ingred1) => (ingred2) => (ingred3) =>
//   `${ingred1} ${ingred2} ${ingred3}`;

// const mySammy = buildSammy("turkey")("cheese")("bread");
// console.log(mySammy);

// -- -

const multiply = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)); // logs (y) => x * y
console.log(curriedMultiply(2)(3));

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);
const timesFive = curriedMultiply(5);

console.log(timesTen); //  logs (y) => x * y
console.log(timesTen(8)); // logs 80
console.log(timesFive(3)); // logs 15

const updateElementText = (id) => (content) =>
  (document.getElementById(id).textContent = content);
const updateHeaderText = updateElementText("header");

setTimeout(() => {
  updateHeaderText("Welcome to currying!");
}, 2000);
