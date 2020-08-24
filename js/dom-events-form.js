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
