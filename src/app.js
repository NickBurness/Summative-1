import config from './config/config.js';
import express from 'express';
import CurrencyRepository from './repositories/currencyRepository.js';
import CurrencyService from './services/currencyService.js';


const PORT = config.port
const app = express() 

app.set('view engine', 'ejs') // define ejs as the view engine
app.set('views', './views') // set directory where view files are 

app.use(express.static('public')); // use static files such as CSS in the web app from the 'public' folder

const currencyService = new CurrencyService() // initialise the currency service
const currencyRepo = new CurrencyRepository(currencyService) // initialise the currency repo using the currency service

// Home Page (also Currency Convert page) route
app.get('/', async (req, res) => {
  try {
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

// Latest Rates route 
app.get('/rates', async (req, res) => {
  try {
    // Fetch all currencies
    const currencies = currencyRepo.findAll();
    const exchangeRates = currencyRepo.exchangeRates;
    const currencyToCountryMap = currencyRepo.currencyToCountryMap;

    // Log the currencies and exchange rates to verify
    console.log('Currencies:', currencies);
    console.log('Exchange Rates:', exchangeRates);

    // Render EJS template and pass the currencies, exchange rates, and currencyToCountryMap data with the request
    res.render('rates', { currencies, exchangeRates, currencyToCountryMap });

  } catch (error) {
    console.error("Error during API request or repository initialization", error);
    res.status(500).send('Error fetching currency rates');
  }
});

// Start the server
app.listen(PORT, async (req, res) => {
  // Initialise the repository to fetch all of the currency data via the currency service
  await currencyRepo.initialise();

  console.log(`Server running at http://localhost:${PORT}/`);
});
