// const memoizedCalc = () => {
//   const cache = {};

//   function calc(a, b) {
//     const key = `${a}+${b}`;
//     if (key in cache) {
//       console.log("returns memoized");
//       return cache[key];
//     } else {
//       console.log("calcute");
//       cache[key] = a + b;
//       return cache[key];
//     }
//   }

//   return calc;
// };

// const value = memoizedCalc();
// value(3, 4);
// value(3, 4);
// value(3, 4);

// let f = () => {
//   let i = 1;
//   return () => {
//     console.log(i);
//   };
// };

// console.dir(f());

const func = () => {
  for (let i = 0; i < 3; i++) {
    const log = () => {
      console.log(i);
    };
    setTimeout(log, 100);
  }
};

console.dir(func());
