// LEXICAL SCOPING

/*
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

    alert() statement within the displayName() function successfully displays the value of the name variable,
    which is declared in its parent function. This is an example of lexical scoping,
    which describes how a parser resolves variable names when functions are nested.
    The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.
*/

// ----------------------------------------------------------

// CLOSURES

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// displayName() inner function is returned from the outer function before being executed.

// myFunc is a reference to the instance of the function displayName that is created when makeFunc is run.
//The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.
//For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.
