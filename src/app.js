// filename: app.js
// purpose: Entry point of the application 
// const config = require('../src/config/config');
// const express = require('express') // use express a minimalist framework for Node.js

import config from './config/config.js';
import express from 'express';
import axios from 'axios';  // Import axios

import CurrencyRepository from './repositories/currencyRepository.js';
import CurrencyService from './services/currencyService.js';

const PORT = config.port // access environment variables
const app = express()

// Initialise the currency service and repository
const currencyService = new CurrencyService();
const currencyRepo = new CurrencyRepository(currencyService);

// Home route
app.get('/', async (req, res) => {
  try {
    // Initialize the repository which fetches data from the CurrencyService
    await currencyRepo.initialize();

    // Example usage: Get all currencies
    const currencies = currencyRepo.findAll();

    // Log the currencies to verify
    console.log('Currencies:', currencies);

    // Send a response back to the client (you could also render data in a template or send JSON)
    res.json(currencies);  // Sending the list of currencies back as JSON
    
  } catch (error) {
    console.error('Error during API request or repository initialization:', error);
    res.status(500).send('Error occurred during API request');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
