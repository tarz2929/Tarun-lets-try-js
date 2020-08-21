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

console.log( "Hello to the browser console!" ); // We can output literal values.
console.log( myArray ); // We can output variables and their contents.
console.log( 10 % 3 ); // We can also just throw in an expression and see what it evaluates to!
// Remember: "%" means modulous (the remainder you'd get from a division.)

/**
 * Concatenation and/vs. Template Literals
 */

// Standard concatenation w/strings.
const myName = "Warren";
const concattedString = "Hello, " + myName + "!";
console.log( concattedString );

// Watch out for this gotcha'! Number addition vs. concatenation.
// They use the same operator: "+"
console.log( 3 + 3 ); // (Number)6 - this was an addition!
console.log( 3 + "3" ); // (String)"33" - this was a concatenation.
console.log( 3 + 3 + "3" ); // (String)"63" - an addition of the first two... THEN concatenation!
console.log( 3 + 3 + Number( "3" ) ); // We can use the "Number()" function in JS to convert strings to numbers.
                                      //(if it is string featuring numeric characters.)
console.log( String( 3 ) + String( 3 ) + "3" ); // We can use the "String()" function in JS to convert numbers (or other datatypes) to strings.

console.log( parseInt( 38.957 ) ); // parseInt() and parseFloat() might feel a bit more familiar for ensuring a value will or will not have decimal points.

// CONCATENATION:
// const concattedString = "Hello, " + myName + "!";
// console.log( concattedString );

// TEMPLATE LITERAL EQUIVALENT:
const templateLiteralString = `Hello, ${myName}!`; // Template literals MUST be inside back ticks " ` " NOT single quotes " ' ".
console.log( templateLiteralString );

// Back-tick strings are white-space sensitive!
// This means new-lines and spaces are maintained.
console.log( `
This is a string in back-ticks (\`).
It is white-space and new-line sensitive!
Great for formatting your outputs.

===

An example of a use for a template literal could be...
Our array: myArray is ${myArray.length} items long.
Its fourth index includes the value: ${myArray[4]}
All template literals are wrapped in: "\${}"
` );
