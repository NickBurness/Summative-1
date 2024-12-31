import config from './config/config.js';
import express from 'express';
import CurrencyRepository from './repositories/currencyRepository.js';
import CurrencyService from './services/currencyService.js';

const PORT = config.port
const app = express() 

app.set('view engine', 'ejs') // Define ejs as the view engine
app.set('views', './views') // Set directory where view files are 

// Initialise the currency service and repository
const currencyService = new CurrencyService()
const currencyRepo = new CurrencyRepository(currencyService)

// Home route
app.get('/', async (req, res) => {
  try {
    // Initialise the repository which fetches data from the CurrencyService
    await currencyRepo.initialize();
    
    // get all available currencies
    const currencies = currencyRepo.findAll();

    // Log the currencies to verify
    console.log('Currencies:', currencies);

    // Render EJS template and pass the currencies data with the request
    res.render('home', { currencies });
    
  } catch (error) {
    console.error('Error during API request or repository initialisation:', error);
    res.status(500).send('Error occurred during API request');
  }
});

// Charts route 
app.get('/charts', async (req, res) => {
  try {
    // to be implemented
    const currencies = currencyRepo.findAll();

    // Log the currencies to verify
    console.log('Currencies:', currencies);

    // render EJS template and pass the currencies data with the request
    res.render('charts', { currencies});

  } catch (error) {
    console.error("Error during API request of repository initialisation", error)
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
