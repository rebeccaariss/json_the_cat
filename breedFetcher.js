const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, function(error, response, body) {
    if (error) {
      callback(error, null); // Print the error if one occurred
    }

    if (body) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback("Sorry, we couldn't find the breed you entered!", null);
      } else {
        callback(null, data[0].description); // Returns the data converted to object format (deserialized from JSON string into using JSON.parse)
      }
    }

  });
};

module.exports = { fetchBreedDescription };