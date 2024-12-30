// filename: app.js
// purpose: Entry point of the application 
const config = require('../src/config/config');
const express = require('express') // use express a minimalist framework for Node.js


const PORT = config.port // access environment variables
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, Express!')
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});
