export class Rectangle {
  // used to initialize and create object instance
  a = 0;
  b = 0;
  #privateField = "this is private field";

  constructor(options = {}) {
    Object.assign(
      this,
      {
        height: 320,
        width: 200,
      },
      options
    );
  }
  static #PRIVATE_STATIC_FIELD = "i am private static field";
  static PUBLIC_STATIC_FIELD = "i am public field!";

  sum(num1, num2) {
    console.log("private field iis", this.#privateField);
    this.sum = num1 + num2;
    this.#privateMethod();
    console.log(Rectangle.#PRIVATE_STATIC_FIELD);
  }
  #privateMethod() {
    console.log("i am private method!");
  }
}
