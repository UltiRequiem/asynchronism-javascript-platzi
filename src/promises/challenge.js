const API = 'https://rickandmortyapi.com/api/character/';
const fetchData = require('../utils/fetchData');

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    console.log(data.results[0].name);
    return fetchData(`${data.results[0].origin.url}`);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.error(err));
