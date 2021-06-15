const https = require('https');
const API = 'https://rickandmortyapi.com/api/character/';

function APIRequest(url, callback) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    if (res.statusCode === 200) {
      let body = '';
      res.on('data', (data) => {
        body += data;
      });
      res.on('end', () => {
        callback(null, JSON.parse(body));
      });
    } else {
      const error = new Error(
        `REQUEST ERROR ON ${url}. Status ${res.statusCode}`
      );
      callback(error, null);
    }
  });
}

APIRequest(API, (error, response) => {
  if (error) return console.error(error.message);
  APIRequest(API + response.results[0].id, (error2, response2) => {
    if (error2) return console.error(error2.message);
    APIRequest(response2.origin.url, (error3, response3) => {
      if (error3) return console.error(error3.message);
      console.log(response.info.count);
      console.log(response2.name);
      console.log(response3.dimension);
    });
  });
});
