// import 3rd party dependencies like express and custom classes from other .js files
import config from './config/config.js';
import express from 'express';
import CurrencyRepository from './repositories/currencyRepository.js';
import CurrencyService from './services/currencyService.js';


const PORT = config.port // gather port number from .env file
const app = express() // initialise a new web app that uses express

app.set('view engine', 'ejs') // define ejs as the view engine allowing JavaScript to be embedded into HTML
app.set('views', './views') // set the directory to where view files are kept

app.use(express.static('public')); // serve static files such as Images and CSS to the web app from the 'public' folder

const currencyService = new CurrencyService() // initialise the custom currency service
const currencyRepo = new CurrencyRepository(currencyService) // initialise the currency repo that depends on the currency service

// Home Page (also Currency Convert page) route
app.get('/', async (req, res) => {
  try {
    // get all available currencies data using the currencyRepo (which was initialised when the app started)
    const currencies = currencyRepo.findAll();

    // Log the currencies to verify
    console.log('Currencies:', currencies);

    // Render EJS template and pass the currencies data with the request
    res.render('home', { currencies });
    
  // catch and log any errors to the console, detail with a suitable response code
  } catch (error) {
    console.error('Error during API request or repository initialisation:', error);
    res.status(500).send('Error occurred during API request');
  }
});

// Latest Rates route 
app.get('/rates', async (req, res) => {
  try {
    // get all available currencies data using the currencyRepo (which was initialised when the app started)
    const currencies = currencyRepo.findAll();
    const exchangeRates = currencyRepo.exchangeRates; // extract all currency rate permutations to be displayed
    const currencyToCountryMap = currencyRepo.currencyToCountryMap; // extract helpful dictionary to map SVG images on the frontend

    // Log the currencies and exchange rates to verify
    console.log('Currencies:', currencies);
    console.log('Exchange Rates:', exchangeRates);

    // Render EJS template and pass the currencies, exchange rates, and currencyToCountryMap with the request
    res.render('rates', { currencies, exchangeRates, currencyToCountryMap });

    // catch and log any errors to the console, detail with a suitable response code
  } catch (error) {
    console.error("Error during API request or repository initialisation", error);
    res.status(500).send('Error fetching currency rates');
  }
});

// Start the server
app.listen(PORT, async (req, res) => {
  // Initialise the repository to fetch all of the currency data via the currency service
  // this single repo call when the app starts gathers all of the data from freecurrencyapi 
  // this would later be updated to occasionally be called on a perodic timer to have
  // an even more real-time service
  await currencyRepo.initialise();
  // Indicates that the service has started and where it can be accessed
  console.log(`Server running at http://localhost:${PORT}/`);
});
