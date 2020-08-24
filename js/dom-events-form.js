// alert( "DOM Events Form Script Loaded!" );
// Yay! Our script is loaded!

// Let's grab our form... it can listen for "submit"!
const helloForm = document.querySelector( 'form' );
console.log( helloForm );

// Let's grab our form field, so that we can access its field value.
const nameField = document.getElementById( 'your-name' );
console.log( nameField );

// Let's grab our list, so we can output hellos to the user!
const helloList = document.querySelector( '#hello-list' );
console.log( helloList );

/**
 * Event Listener: Form Submit
 */

// eventListener passes an argument to our function... an event object!
helloForm.addEventListener( 'submit', ( event ) => {
  // Stop the form from submitting! 
  event.preventDefault(); // We don't want a new pageload!
  console.log( event ); // The full event object.
  console.log( event.target ); // Gets the element that the event occurred on.

  // How do we get our "value" from our form field?
  const name = nameField.value;
  console.log( name );

  // How do I make a new LI element?
  const newLI = document.createElement( 'LI' ); // We want a <li> !
  console.log( newLI ); // Notice, it is not in the page YET!
  // ***When we create an element, it is not automatically added. We have to tell it where and when to enter the webpage.

  // How do I insert a value/text into the LI element?
  newLI.textContent = `Hello, ${name}!`; // Add content to the LI!
  console.log( newLI.textContent ); // Test that it was successfully assigned.
  console.log( newLI ); // Or you can view the whole object / element again if preferred.

  // How do I add the LI element to the page (or, our list?)
  helloList.appendChild( newLI ); // Append (add) the new LI INTO the UL (hello-list.)
  // *** Once an element is appended, it is not stuck there. You can move it again...
  // *** and again in this same way.
} );
