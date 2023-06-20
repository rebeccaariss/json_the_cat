const request = require('request');

const breedArg = process.argv[2]; // breed supplied by user command line argument
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedArg}`;

request(url, function(error, response, body) {
  if (error) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code
    console.error('error:', error); // Print the error if one occurred
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Sorry, we couldn't find the breed you entered!");
  } else {
    console.log(data); // Prints the data converted to object format (deserialized from JSON string into using JSON.parse)
  }

  // console.log(typeof data); // Prints "object"
  // console.log(data[0].weight); // Prints first entry in returned object
});