// Let's learn JavaScript. Focus: Variables, Types, Operators, Objects, Arrays, Conditionals, Expressions Lecture: 3.0 hours

// Create the following files
  // 5/deliverables/index.html
  // 5/deliverables/intro_to_javascript.js
console.log('Intro to JS');

// Variable scope
var a = 1;
function b() {
	a = 10;
	function a() {}
}
b();
console.log(a); // 1
console.log(a()); // Uncaught TypeError: a is not a function


// Types
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var x = {firstName:"John", lastName:"Doe"};    // Object
var something;                                 // Now something is undefined

// function
// expression
var d = function () { console.log('this is a function expression') }; // function
d();

// declaration
function foo() { console.log('this is a function declaration') } // foo
foo();

// iife (immediately invoked function expression)
(function () {
  console.log('IIFE function');
})();



// Common Operators
// '&& '  #  'and'
// '|| '  #  'or'
// '== '  #  'equality'
// '==='  #  'strict equality'
// '!= '  #  'not equality'
// '=~ '  #  'regex'
// ' = '  #  'assignment'
// ' > '  #  'greater than'
// ' < '  #  'less than'
// ' >='  #  'greater than or equal to'
// ' <='  #  'less than or equal to'

var b = 10;
var c = 50;

// if, else if, else
if (b > c) {
  console.log(b);
} else if (c > 100) {
  console.log(c);
} else {
  console.log('Nada')
}

var b = 10;
var c = 50;

// switch
switch (b){
  case '10':
    console.log(b, "It's 10");
    break;
  case 100:
    console.log('It\'s 100');
    break;
  default:
    console.log('Default case');
    break;
}


// Objects && object.create
var mathObj = {
  a: 0,
  b: 0,
  sum: function(){
    return this.a + this.b;
  }
};
// mathObj.sum(10, 20);
var mathObjConstructor = Object.create( mathObj );

mathObj.subtract = function() {
  return this.a - this.b;
};

console.log(mathObjConstructor); // [sum]
mathObjConstructor.a = 10;
mathObjConstructor.b = 30;
mathObjConstructor.sum();

// don't do this ----
// dont set methods on the __proto__ property
mathObjConstructor.__proto__.multiply = function() {
  return this.a * this.b;
}
// ------------------

function sum (a, b) {
  var total = a + b;
  console.log(total);
}
// sum(10, 20);

// constructor function
function Math(a, b){
  this.a = a;
  this.b = b;
}
var aaa = new Math(10, 20);
var bbb = new Math(30, 10);
Math.prototype.sum = function() {
  return this.a + this.b;
}
Math.prototype.multiply = function() {
  return this.a * this.b;
}

console.log( aaa.sum() );
console.log( aaa.multiply() );
console.log( bbb.multiply() );


// declared function
function sum2Numbers (a, b) {
  return a + b;
}
console.log( sum2Numbers(10, 20) );



// Arrays
// Conditionals
// Expressions
