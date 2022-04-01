/*
 * Tabla: //? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * Lista: //? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
*/


//? Primary expressions ----------------------------------------

//! this  -------------------

/* para apuntar a variables locales */

const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  console.log(test.func());

/* contiene diccionario de atributos locales */

class Ejem {
    constructor(name) {
        this.name = name;
    };

    getThis(){
        return this;
    }
}
const ejem = new Ejem("Daniel");
console.log(ejem.getThis())
  
//! function ----------------

// Traditional Functions
function name(a, b){
  return a + b + 100;
}

function name(a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Functions
(a, b) => a + b + 100;

(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}

//! class -------------------

class cosa {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};


// function*
// yield
// yield*
// async function
// await
// []
// re
// group

// ? Left-hand-side expressions --------------------------------
// new
// new.target
// import.meta
// super
// ...obj

// ? Increment and decrement -----------------------------------

// a++
// ++a


// ? Unary operators  ------------------------------------------

// delete
// void
// typeof
// +
// -
// ~
// '!'


// ? Arithmetic operators --------------------------------------

// +
// -
// /
// * 
// %
// **


// ? Relational operators --------------------------------------

// in
// instanceof
// <
// <=


// ? Equality operators ----------------------------------------

// ==
// '!='
// ===
// '!=='


// ? Bitwise shift operators -----------------------------------

// <<
// >>
// >>>

// ? Binary bitwise operators ----------------------------------

// &
// |
// ^


// ? Binary logical operators ----------------------------------
// &&
// ||
// '??'

// ? Conditional (ternary) operator ----------------------------

// (condition ? ifTrue : ifFalse)

// ? Optional Chaining operator --------------------------------
// '?'

// ?  Assignment operators -------------------------------------
// = 
// *=
// **=
// /=
// %=
// +=
// -=
// <<=
// >>=
// >>>=
// &=
// ^=
// |=
// &&=
// ||=
// '??='
// [a, b] = [1, 2] {a, b} = {a:1, b:2}


// ? Comma operator  -------------------------------------------
// ,
