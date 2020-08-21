// alert( "Hello, World! JavaScript is loaded!" );

// This is a single-line comment. Starts with //
/**
 * This is a multi-line
 * comment. It looks much
 * the same as what we used
 * in CSS!
 */

/**
 * Assignments / variables.
 */

// Variables declared with the "var" keyword, are considered "function-scoped."
// We typically avoid using var, in favour of new declaration keywords.
// (AKA. DO NOT USE VAR UNLESS YOU ABSOLUTELY HAVE TO!)
var myFirstVariable = "Hello";

// Variables declared with the "let" keyword, are considered "block-scoped."
// "Let" variables can be re-assigned later in the program.
let mySecondVariable = "World!";

// Variables declared with the "const" keyword, are considered "block-scoped."
// "Const" variables CANNOT be re-assigned later in the program.
const myThirdVariable = myFirstVariable + ", " + mySecondVariable;
                        // Concatenation character is the "+" sign.
                        // It glues strings together!

/**
 * Datatypes.
 */
const myString  = "This is a string!";
const myInteger = 34; // Ints and Floats are TECHNICALLY the same data-type in JS.
const myFloat   = 16.782; // The datatype is simply called "Number."
const myNaN     = NaN; // "Not a Number." So when math goes horribly wrong...
const myTrueBool = true; // Booleans can either be TRUE or FALSE.
const myFalseBool = false; // Note: CAPS do matter! The must be lowercase.
const myNull    = null; // A defined / existing variable with no assigned value.
const myUndefined = undefined; // The variable does not exist.
const myArray = [ // Arrays can store multiple pieces of data (including other arrays!)
  myString,
  myInteger,
  myFloat,
  myNaN,
  myTrueBool,
  myFalseBool,
  myNull,
  myUndefined
];

/**
 * Writing to the console.
 */
