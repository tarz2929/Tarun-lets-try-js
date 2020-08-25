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

// We can convert an existing object into a JSON string.
// Make sure the object doesn't have methods or incompatible data/features for the JSON format.
const myObjString = JSON.stringify( myObj );
console.log( myObjString );

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

/**
 * Classes (Blueprints for a "Type" of Object!)
 * Typically PascalCased.
 */

class Person
{
  // "constructor" is a reserved method name.
  // The constructor method runs when a new object is being
  // created following this blueprint / class.
  constructor ( name = "", age = 0, hobbies = [] )
  {
    this.name = name;
    this.age = Number( age );
    this.hobbies = hobbies;
  }

  // We can create our own methods!
  // These work like functions, but are INSIDE objects.
  sayHello ()
  {
    const helloP = document.createElement( "P" );
    helloP.textContent = `Hello there! I am ${this.name}, nice to meet you!`;
    document.body.appendChild( helloP );
  }
}

// Now we can make an object that FOLLOWS the blueprint.
const jane = new Person(
  "Jane",
  34,
  ["Sewing", "Cross-Country Skiing"]
);

// Let's see our brand new "Person" object!
console.log( jane );
console.log( jane instanceof Person ); // true if the object is from Person

// Run the sayHello() method for Jane.
jane.sayHello();

const dimitri = new Person(
  "Dimitri",
  41,
  ["Painting", "Driving"]
);

console.log( dimitri );

// Accessing properties is the same as always!
console.log( `My name is ${dimitri.name}. I am ${dimitri.age} years old.` );

// Have the Dimitri Person say hello now.
dimitri.sayHello();
