// https://javascript.info/prototype-inheritance

// [[Prototype]]
// The object referenced by [[Prototype]] is called a “prototype”.

/*
    In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

    When we read a property from object, and it's missing, Javascript automatically takes it from protoype.
    It is called "prototypal inheritence".

    The property [[Prototype]] is internal and hidden, but there are ways to set it.
*/

// 1) one of the is to use the special name __proto__

let animal = {
  eats: true,
  jumps: false,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

/*
      Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]].
      The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype.
*/

/*
      Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.
      They only operate on the object itself. Properties from the prototype are not taken into account.
*/
