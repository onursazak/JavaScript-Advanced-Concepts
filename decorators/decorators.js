// Decorators wrap a function in another function.

// These wrappers "decorate" the original function
// with new capabilities.

// The concept of decorators is not exclusive to JavaScript

// Benefits: D.R.Y and clean code through composition

// Example 1:
// Using closure to log how many times a function is called

// let sum = (...args) => {
//   return [...args].reduce((acc, num) => acc + num);
// };

// const callCounter = (fn) => {
//   let count = 0;

//   return (...args) => {
//     console.log("count : ", count);
//     console.log(`Sum has been called ${(count += 1)} times`);
//     return fn(...args);
//   };
// };

// sum = callCounter(sum);

// console.log(sum(2, 3, 5));
// console.log(sum(1, 5));
// console.log(sum(14, 5));

// Example 2
// Check for valid data and number of params

let rectangleArea = (length, width) => {
  return length * width;
};

const countParams = (fn) => {
  return (...args) => {
    // Note: Function.length: The length property indicates the number of parameters expected by the function.
    if (args.length !== fn.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`);
    }
    return fn(...args);
  };
};

const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params  must be integers`);
      }
    });
    return fn(...params);
  };
};

// applied first makes it runs last
rectangleArea = countParams(rectangleArea);
// applied last makes it runs first
rectangleArea = requireIntegers(rectangleArea);

console.log(rectangleArea(20, 30));
console.log(rectangleArea(20, "string"));
