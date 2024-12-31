// filename: app.js
// purpose: Entry point of the application 
const config = require('../src/config/config');
const express = require('express') // use express a minimalist framework for Node.js


const PORT = config.port // access environment variables
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, Express!')

  // make a request on load, get the Rates for all available countries and set these rates in session storage 
  // this is to limit the number of requests necessary to the 3rd party currency api and improve usability, performance and reliability. 
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () { console.log(this.responseText); });
  oReq.open("GET", config.baseUrl);
  oReq.setRequestHeader("apikey", config.apiKey);
  oReq.send();
  });



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});

