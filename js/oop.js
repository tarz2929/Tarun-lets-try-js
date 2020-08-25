// alert( "OOP.js loaded!" ); // The file is loaded if we see the alert!

// Basic JS object.
const myObj = {
  name: "Joe",
  age: 35,
  hobbies: [ "Movies", "Pottery" ]
};

// Access properties or methods with "."
console.log( `My name is ${myObj.name}. I am ${myObj.age} years old!` );

console.log( myObj );

// JSON (JavaScript Object Notation)
// Properties MUST be wrapped in double quotes to be considered valid JSON.
// We CANNOT have methods in a JSON string/object.
const secondPersonString = `{
  "name": "Sarah",
  "age": 29,
  "hobbies": [ "Deep Sea Fishing", "Cycling" ]
}`;
console.log( secondPersonString );

// Convert a string into a regular JS object we can use.
const secondPersonObj = JSON.parse( secondPersonString );
// If the string was properly formatted JSON, it should now be usable!
console.log( secondPersonObj );
