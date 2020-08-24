// First thing's first... is our file loading into the browser?!
// alert( "DOM Events JS loaded!" );
// console.log( "DOM Events JS loaded!" );
// ***Normally the above gets removed after your test...
// ***This is just for your reference!

/**
 * Targeting via the DOM (Document Object Model) in JavaScript
 */

// Grab our H2 as practice.
const myH2 = document.getElementById( 'target-me' );
console.log( myH2 ); // We can see in console we successfully retrieved this element!

// Let's try and grab the proceeding paragraph...
const myP = document.querySelector( '#target-me + p' ); // Target a <p> DIRECTLY AFTER the element with id="target-me"
console.log( myP );

// Let's grab our hover button!
const hoverButton = document.querySelector( 'p > button' ); // Remember... this grabs the FIRST match only.
console.log( hoverButton );

// Grab our first span in the <p> (second child, in this case.)
const firstSpan = document.querySelector( 'p > span:nth-child(2)' );
console.log( firstSpan );

// Let's grab our hover button!
const clickButton = document.querySelector( 'p > button:nth-of-type(2)' );
console.log( clickButton );

// Grab the second span in the <p> (fourth child, in this case.)
const secondSpan = document.querySelector( 'p > span:nth-child(4)' );
console.log( secondSpan );

/**
 * DOM / Element Manipulation
 */

// We can use JS to update / replace content in elements.
myH2.textContent = "This H2 Was Found and Updated!";
console.log( 'Outputted string into our <h2> element!' );
// We are replacing the existing CSS string.
myH2.className = 'salmon-coloured-text';
console.log( 'Change the H2 font colour to "salmon."' );

/**
 * Event Listeners.
 * We can add "listeners" to elements... they "listen" for user actions.
 * When a user action is detected, we can have our JS follow a set of instructions.
 */

// We can add event listeners to HTMLElement objects.
/**
 * There are two arguments to the addEventListener method:
 *   1) The type of event (by name.)
 *   2) The instructions (what should run when the event occurs.)
 *      (This means: a function!)
 */
console.log( firstSpan.classList ); // List of classes applied to our element.
hoverButton.addEventListener( 'mouseenter', () => {
  console.log( 'The mouse has entered the button!' );
  firstSpan.classList.add( 'salmon-coloured-text' );
  console.log( firstSpan.classList );
} );

hoverButton.addEventListener( 'mouseleave', () => {
  console.log( 'The mouse has left the button!' );
} );
