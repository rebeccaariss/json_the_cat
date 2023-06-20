const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // In this case, what is returned as the body of the request is a string (not HTML)
  console.log('typeof body: ', typeof(body));
});