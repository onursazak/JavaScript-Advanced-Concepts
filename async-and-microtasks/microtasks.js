// const sum = (a, b) => {
//   console.log(a + b);
//   return a + b;
// };

// const asyncCalcSum = (num1, num2) => {
//   return new Promise((resolve, reject) => {
//     if (!num1 || !num2) {
//       reject(new Error("rejected!"));
//       return;
//     }
//     resolve(num1 + num2);
//   });
// };

// asyncCalcSum(20, 5)
//   // there is no priorty between immeditely resolved promise and queueMicroTask
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  It's important to know that you can (and often will) run other code before a setTimeout() call executes, or between iterations of setInterval().
//  Depending on how processor-intensive these operations are, they can delay your async code even further, as any async code will execute only after the main thread is available. (In other words, when the stack is empty.)
// setTimeout(() => {
//  Note: The specified amount of time (or the delay) is not the guaranteed time to execution, but rather the minimum time to execution.
//  The callbacks you pass to these functions cannot run until the stack on the main thread is empty.
//    runs after both tasks and microtasks. (runs last.)
//   console.log("in timeout");
// }, 0);

// A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty
// queueMicrotask(() => {
//   // there is no priorty between immeditely resolved promise and queueMicroTask
//   console.log("queueMicrotask1");
// });
// queueMicrotask(() => {
//   // there is no priorty between immeditely resolved promise and queueMicroTask
//   console.log("queueMicrotask2");
// });

// sum(15, 25);

const messageQueue = [];

let sendMessage = (message) => {
  messageQueue.push(message);
  console.log("* ", message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      console.log(json);
    });
  }
};

sendMessage("message1");
sendMessage("message2");
sendMessage("message3");
sendMessage("message4");
sendMessage("message5");
