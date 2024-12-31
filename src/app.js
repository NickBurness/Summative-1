// filename: app.js
// purpose: Entry point of the application 
// const config = require('../src/config/config');
// const express = require('express') // use express a minimalist framework for Node.js

import config from './config/config.js';
import express from 'express';
import axios from 'axios';  // Import axios

const PORT = config.port // access environment variables
const app = express()

app.get('/', async (req, res) => {
  try {
    // Make a request to the 3rd party API to get the rates for all available countries
    const response = await axios.get(config.baseUrl, {
      headers: {
        'apikey': config.apiKey,
      },
    });

    // Log the response data to the console
    console.log('API Response:', response.data);

    // Set the rates in session storage or send back to the client
    // Example: res.json(response.data); or store the data in session
    res.send('Hello, Express! API call completed.');

  } catch (error) {
    console.error('Error during API request:', error);
    res.status(500).send('Error occurred during API request');
  }
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});

