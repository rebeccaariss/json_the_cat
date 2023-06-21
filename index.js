const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; // breed supplied by user command line argument

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});