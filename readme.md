# Proposal

A minimal viable product (MVP) for a currency converting application that displays the most popular currencies worldwide and the exchange rates for them, written in HTML, CSS and JavaScript

# Purpose

To enable users to quickly ascertain how much value a user has from one currency to another currency. The product is intended to help uses perform better financial planning for special occasions for which they would need to convert from currency to another, for example holiday spending money planning or for making financial investments in global financial markets.

# Project Requirements

## Mandatory Requirements 

- Needs to consume an API to fetch currency information such as name, symbol, rate.
- Needs to be able to fetch detailed information about as many currencies as possible
- The system needs to be performant, the service should not make excessive API calls, as to minimise the 3rd party API usage and make the service overall more reliable.
- The system needs to be able to calculate the currency rates for all available countries using the fetched data
- The system needs to be able to accept a monetary amount by the user and convert it to their target currency
- The applications web pages should be dynamic and responsive in nature for mobile and desktop views.

## Nice to have 

- If historic information is available for currencies from the 3rd party API then a Charts Page should exist to show the historic rates between different currencies
- Build in other currency pairs such as crypto (Bitcoin, Ethereum etc...) and precious metals (Gold, Silver, Platinum, etc...)

# Technologies

## Main technologies
- NodeJS (Provides a backend runtime to build apps with JavaScript)
- 
- EJS (Embedded JavaScript, Templating engine to write HTML mixed with JavaScript)
- CSS (Provides styles to the frontend of the app, helping to build friendly User Interface that is dynamic and repsonsive)
- Mocha (Unit Testing framework)
- Chai (Unit Testing framework)

- Git (version control system)

## App Dependencies 

- FreeCurrencyAPI 
- Express (Minimalist framework for building web apps in NodeJS)
- Mocha
- Chai
- Dotenv (provides a mechanism for securely adding secrets/keys to the application)
- Gitignore (allows any file to be hidden from source control, such as key and secrets file like `.env`)

# Design Documentation

The desired user interface for the project has been crafted using Figma, to view the wireframes/prototype directly go to [The Currency Converter App Prototype](https://www.figma.com/design/s0g37ImN1jyZIC76gmTkKC/Currency-Converter) or see snapshots of each page from the images below.

Figma Design for the Currency Converter Page on Desktop  
![Figma Design for the Currency Converter Page - Desktop Variant](docs\CurrencyConverterDesign-DesktopView.png)  

Figma Design for the Currency Converter Page on Mobile  
![Figma Design for the Currency Converter Page - Mobile Variant](docs\CurrencyConverterDesign-MobileView.png)    

Figma Design for the Latest Rates Page on Desktop  
![Figma Design for the Latest Rates Page - Desktop Variant](docs\LatestRatesDesign-DesktopView.png)  

Figma Design for the Latest Rates Page on Mobile  
![Figma Design for the Latest Rates Page - Mobile Variant](docs\LatestRatesDesign-MobileView.png)  

Figma Design for the Charts Page on Desktop (Post MVP feature)  
![Figma Design for the Charts Page - Desktop Variant](docs\ChartsDesign-DesktopView.png)  

Figma Design for the Charts Page on Mobile (Post MVP feature)  
![Figma Design for the Charts Page - Mobile Variant](docs\ChartsDesign-MobileView.png)  

# Workflow

Trunk Based Development .... 


# Project Planning

GitHub projects have been used as a ticketing system to manage the activities related to the projects development. This is for all activities related to the design, build and testing stages of the product. Requirements Analysis has been carried out seperately and before any development work has commenced,
 [Currency Converter GitHub Project](https://github.com/users/NickBurness/projects/2)

# Testing
## Manual Testing

During development manual tests have been conducted, this has been carried out to ensure that interactive elements carried out by the client side of the appliction are functioning
to expectations. For example, the `Back to Top` button and `Search Bar` on the *Latest Rates* page work as intended for the user. The same method of manual testing has been conducted
to ensure that the system is responsive and the user interface is intuitive and friendly on both desktop and mobile views.

## Unit Testing

Each custom JavaScript class / function is either responsible consuming data or performing calculations has been tested using Mocha/Chai.

All of the Unit Tests for this product can be found under `/src/test` 

To run these Unit tests ensure that you are in the `/src` folder and run the command `npm test` from a terminal such as *Git Bash*, the results of unit testing will be 
visible in the terminal after the run test command has finished executing.

## Smoke Testing

The CurrencyConverter application can be very easily smoke tested as to ensure that it is operational after any new features or changes have been applied to the system. 

1. Go to the CurrencyConveter page (The applications home page) and convert between any amount between two currencies and check that a result is produced.
2. Go to the Latest Rates page, check that Tables have been loaded to the page at the same time, use the search box to find and jump to a currencys rate table.


# Setting up and running the App

## Prerequisites

1. Ensure you have NodeJS installed, run the command `node --version` from a terminal to verify
2. Ensure Node Package Manager is installed to get app dependencies, run the command `npm --version` from a terminal to verify
3. Ensure you have your own an API Key, to get one [Register to FreeCurrencyAPI.com](https://app.freecurrencyapi.com/register) 

## Running the CurrencyConverter App

1. Ensure that the repository has been cloned locally to your machine
2. Add a `.env `file to the `/src` folder in this repo and add the following to the file, replace the value for *API_KEY* with your own key from when you registered to the FreeCurrencyAPI service.

```
PORT = 3000
TEST = This is a value purely for unit tests
API_KEY = <INSERT_YOUR_API_KEY_FROM_THE_FreeCurrencyAPI_HERE>
```

2. Making sure you are in the `/src` folder of the repo, enter and run the command `npm start` 
3. This will begin running the service on port 3000, accesible in the browser by navigating to `http://localhost:3000`

# Evaluation

Evaluate your product in a dedicated “Evaluation” section of your README.

## System Design 

## Strengths

## Weaknesses
 
## Opportunities

Develop a CI/CD pipeline to create a method of automating the testing and rapidly improving deployment times.

## Threats