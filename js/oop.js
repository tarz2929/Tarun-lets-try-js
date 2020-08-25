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

  // This method will make the age go up by one.
  birthday ()
  {
    // Age + 1!
    this.age++; // this.age = this.age + 1;
                // this.age += 1;
    // Add a birthday heading...
    const bDayH2 = document.createElement( 'H2' );
    bDayH2.textContent = "Birthday Detected!";
    document.body.appendChild( bDayH2 );
    // Add a paragraph letting us know WHO is celebrating...
    const bDayP = document.createElement( 'P' );
    bDayP.textContent = `${this.name} is now ${this.age} years old!`;
    document.body.appendChild( bDayP );
  }

  // Let's output a list of their hobbies...
  outputHobbies ()
  {
    // Paragraph (who's hobbies are these?)
    const hobbiesP = document.createElement( 'P' );
    hobbiesP.textContent = `${this.name}'s hobbies include:`;
    document.body.appendChild( hobbiesP );
    // List of hobbies.
    const hobbiesUL = document.createElement( 'UL' );
    // Loop through our hobbies... (for...of loop for Arrays!)
    for ( const hobby of this.hobbies )
    {
      // Create an LI.
      const hobbyLI = document.createElement( 'LI' );
      // Add the hobby text (array item value) to the LI.
      hobbyLI.textContent = hobby;
      // Add THIS <li> to the UL we made.
      hobbiesUL.appendChild( hobbyLI );
    } // Don't forget to add our populated <ul> to the <body>!
    document.body.appendChild( hobbiesUL );
  }

  // Let's try to add a hobby to the hobbies property (array.)
  addHobby ( hobby = "" )
  { // Make sure the string is not empty!
    if ( hobby.length > 0 )
    { // Add the hobby to the end of the array.
      this.hobbies.push( hobby );
    }
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

console.log( jane.age ); // What is the age BEFORE the bday?
// Happy birthday Jane!
jane.birthday();
console.log( jane.age ); // Did the bday CHANGE?

jane.addHobby( "Cinematography" );
jane.addHobby( "Chess" );
jane.outputHobbies();

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

// What are Dimitri's hobbies?
dimitri.outputHobbies();
