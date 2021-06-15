const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (apiURL, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', apiURL, true);
  xhttp.onreadystatechange = (event) => {
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
