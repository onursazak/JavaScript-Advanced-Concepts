// https://javascript.info/function-prototype

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ = animal

console.log(rabbit.eats); // true

console.dir(rabbit);
console.dir(Rabbit);

/*
    Every function has the "prototype" property even if we don’t supply it.
   
    The default "prototype" is an object with the only property constructor that points back to the function itself

    function Rabbit() {}
    by default :

    Rabbit.prototype = {
        constructor: Rabbit
    }

    let rabbit = new Rabbit();
    console.log(rabbit.constructor == Rabbit); // true (from prototype)
*/

/*
    SUMMARY

    The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.

    The value of F.prototype should be either an object or null: other values won’t work.

    The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.

    By default all functions have F.prototype = { constructor: F }, so we can get the constructor of an object by accessing its "constructor" property.

*/

// example for 4th summary item
/*
    function Rabbit(name) {
    this.name = name;
    alert(name);
    }

    let rabbit = new Rabbit("White Rabbit");
    let rabbit2 = new rabbit.constructor("Black Rabbit");
*/
