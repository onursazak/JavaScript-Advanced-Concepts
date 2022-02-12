import { Rectangle } from "./Rectangle.js";
import { Rectangle2 } from "./Rectangle2.js";

// CLASSES !

// classes are template for creating objects.

// const rec1 = new Rectangle(1, 2);
const rec1 = new Rectangle({ width: 1 });
const rec2 = new Rectangle2(100, 200);

rec1.sum(3, 4);
console.log("rec1.privateField: ", rec1.privateField);
console.log("rec1: ", rec1);

console.log("rec2: ", rec2);
