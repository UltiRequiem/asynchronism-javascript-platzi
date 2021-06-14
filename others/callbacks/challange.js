const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url, cb) => {
  let xhttps = new XMLHttpRequest();
  xhttps.open('GET', url, true);
  xhttps.onreadystatechange = (event) => {
    if (xhttps.readyState === 4) {
      // pass
    }
  };
};
