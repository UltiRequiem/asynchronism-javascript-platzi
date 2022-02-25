import { XMLHttpRequest } from 'xmlhttprequest';

const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (apiURL, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', apiURL, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error(`Error ${apiURL}, Status: ${xhttp.status}`);
      return callback(error, null);
    }
  };
  xhttp.send();
};

fetchData(API, (errorOne, dataOne) => {
  if (errorOne) {
    return console.error(errorOne);
  }
  fetchData(API + dataOne.results[0].id, (errorTwo, dataTwo) => {
    if (errorTwo) return console.error(errorTwo);
    fetchData(dataTwo.origin.url, (errorThree, dataThree) => {
      if (errorThree) return console.error(errorThree);
      console.log(dataOne.info.count);
      console.log(dataTwo.name);
      console.log(dataThree.dimension);
    });
  });
});
