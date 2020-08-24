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

  // How do I insert a value/text into the LI element?

  // How do I add the LI element to the page (or, our list?)
} );
