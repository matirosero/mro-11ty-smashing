const fetch = require('node-fetch');

//whatever we export will be available as data
//Fetching/ data loading is async. 
module.exports = async () => {
  
  // Get characters with fetch call, and send it back as json
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/1,2,265,183'
  ).then((res) => res.json());

  // Fetch = a promise, we can use await and promises together 
  // because they're an abstraction of the same thing

  // console.log(characters[0]);

  // return characters;


  // Derived data:

  // transform the data
  const transformed = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      isMyFavorite: character.name === 'Pickle Rick',
    };
  });

  return transformed;
};