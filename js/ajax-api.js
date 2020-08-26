// alert( "AJAX API JS loaded!" ); // Check if the file is loading!

/**
 * AJAX (Asynchronous JavaScript And XML)
 * ======================================
 * Lets us use JavaScript to request information from separate
 * URLs (make separate HTTP/HTTPS requests) post-initial page-
 * load.
 * Despite AJAX referring to XML, we are /usually/ dealing with
 * JSON-formatted data responses here in 2020.
 * The modern way to make AJAX requests with JS usually entails
 * use of the built-in "fetch()" function/feature.
 */

// First argument in "fetch" should be the URL (or resource.)
// If this is URL is an API, we refer to this as an "endpoint."
fetch( 'http://api.open-notify.org/astros.json' )
  // Our function returns a JS object (converted from our 
  // JSON string that the API provides.) 
  .then( response => response.json() )
  // Let's check to see if our object is here!
  .then( data => { console.log( data ); } );

