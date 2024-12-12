// filename: app.js
// purpose: Entry point of the application 

const express = require('express') // use express a minimalist framework for Node.js
const dotenv = require('dotenv') // Get configurations from secrets file

// Load the environment variables from the .env file
dotenv.config()

const PORT = process.env.PORT // access environment variables
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, Express!')
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});
