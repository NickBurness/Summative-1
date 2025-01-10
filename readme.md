# Table of Contents
- [Proposal](#proposal)
- [Purpose](#purpose)
- [Project Requirements](#project-requirements)
  * [Mandatory](#mandatory)
  * [Nice to have](#nice-to-have)
- [Technologies](#technologies)
  * [Application Technologies](#application-technologies)
  * [App Dependencies](#app-dependencies)
  * [Node Dependencies](#node-dependencies)
  * [Other Technologies](#other-technologies)
- [Design Documentation](#design-documentation)
- [Project Planning](#project-planning)
  * [Requirements Analysis](#requirements-analysis)
  * [Ways of working](#ways-of-working)
  * [KANBAN GitHub Projects](#kanban-github-projects)
  * [Git Workflow](#git-workflow)
- [Unit Testing](#unit-testing)
- [Set up and running the Web App](#set-up-and-running-the-web-app)
  * [Prerequisites](#prerequisites)
  * [Steps to follow](#steps-to-follow)
- [Technical Breakdown](#technical-breakdown)
  * [Algorithms](#algorithms)
    + [Exchange Rates Matrix](#exchange-rates-matrix)
    + [Convert Currency](#convert-currency)
    + [Environment Selection](#environment-selection)
  * [Code Repository Structure](#code-repository-structure)
    + [Data Access Methods](#data-access-methods)
- [System Design](#system-design)
  * [Design Patterns](#design-patterns)
    + [MVC](#mvc)
    + [Service and Repository Pattern](#service-and-repository-pattern)
- [Evaluation](#evaluation)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Proposal
A minimal viable product (MVP) for a currency converting application for the most popular global currencies.

# Purpose  
The product is intended to help users perform better financial planning, for example, holiday spending money planning or as a tool to support forex traders to make better investments.

# Project Requirements
## Mandatory 
- Consumes an API to fetch currency information such as the name, symbol, rate.
- Fetches information about as many currencies as possible.
- System needs to be performant, the service should not make excessive API calls, as to minimise API usage and promote reliability.
- Can calculate the currency rates between all available currencies.
- Accepts an amount from the user and converts it to the target currency
- Web pages are dynamic and responsive for both mobile and desktop devices.

## Nice to have 
- Historic Currency Rates that use data visualisations
- Support for other currency pairs such as crypto (Bitcoin) and precious metals (Gold)
- Environment specific configurations such as development, test and production

# Technologies
## Application Technologies
- Node.JS
- HTML5 
- CSS3 
- JavaScript 
## App Dependencies 
- FreeCurrencyAPI 
## Node Dependencies
- Express
- EJS 
- Mocha/Chai 
- Dotenv
- Crossenv
## Other Technologies
- Git 
- GitHub 

# Design Documentation
The user interface (UI) for the application has been created using Figma, to view the prototype, go to [The Currency Converter App Prototype](https://www.figma.com/design/s0g37ImN1jyZIC76gmTkKC/Currency-Converter) or see snapshots of each designed page from the images below.

- Currency Converter Page (Desktop)  
![Design for the Currency Converter Page - Desktop](https://github.com/NickBurness/Summative-1/blob/main/docs/CurrencyConverterDesign-DesktopView.png)  
- Currency Converter Page (Mobile)  
![Design for the Currency Converter Page - Mobile](https://github.com/NickBurness/Summative-1/blob/main/docs/CurrencyConverterDesign-MobileView.png)    
- Latest Rates Page (Desktop)  
![Design for the Latest Rates Page - Desktop](https://github.com/NickBurness/Summative-1/blob/main/docs/LatestRatesDesign-DesktopView.png)  
- Latest Rates Page (Mobile)  
![Design for the Latest Rates Page - Mobile](https://github.com/NickBurness/Summative-1/blob/main/docs/LatestRatesDesign-MobileView.png)  
- Charts Page (Desktop)  
![Design for the Charts Page - Desktop](https://github.com/NickBurness/Summative-1/blob/main/docs/ChartsDesign-DesktopView.png)  
- Charts Page (Mobile)  
![Design for the Charts Page - Mobile](https://github.com/NickBurness/Summative-1/blob/main/docs/ChartsDesign-MobileView.png)  

# Project Planning
## Requirements Analysis
Requirements Analysis has been carried out separately and before any development work has commenced. The general requirements of the currency converter application have been derived from the functionality that available in another popular web application with a similar use case to this project [xe](https://www.xe.com/). 

These high level requirements have been outlined in the [Project Requirements](#project-requirements) section of this readme.
## Ways of working
The agile philosophy has been applied to this project as a way of building the MVP of this application as quickly as possible from the initial requirements. This meant carrying out just enough research and planning in order to develop a set of tickets and applying small but frequent incremental updates to the projects code, with testing regularly.

In regards to testing, a test-driven development (TDD) approach has been carried out, as new features have been developed, so have unit tests to verify the behaviour and functionality.
## KANBAN GitHub Projects
GitHub projects have been used as a ticketing system to manage all activities related to design and development. Visible on the [Currency Converter GitHub Project](https://github.com/users/NickBurness/projects/2) 
 ![GitHub Projects Kanban Board](https://github.com/NickBurness/Summative-1/blob/main/docs/GitHub-KanbanBoard.png)
Each ticket has been crafted using the gathered requirements, assigned to the developer with a priority and ticket size applied to the ticket so that sprint velocity can be estimated. 

## Git Workflow
The Git workflow adopted for this project is the *Feature Branch* Git workflow. Instead of committing directly into the main branch every time. Instead, a new git branch is created from main each time work starts on a new feature, when development work is completed the feature branch is merged into main after a pull request and code review has taken place.

# Unit Testing
Each custom class or function has been tested using a Test-Driven-Development (TDD) approach.
To run the Unit tests ensure that you are in the `/src` folder of the repo and run the command `npm test` from a terminal.

![Image of Unit Tests Suite Results](https://github.com/NickBurness/Summative-1/blob/main/docs/UnitTestSuiteResults.png)

# Set up and running the Web App
## Prerequisites
1. Have NodeJS installed, run the command `node --version` from a terminal to verify
    - If you do not have NodeJS installed, [Download the latest version on their website](https://nodejs.org/en/download)  
2. Have Node Package Manager (NPM) is installed, run the command `npm --version` from a terminal to verify
3. Have a FreeCurrencyAPI API Key, to get one [register to the FreeCurrencyAPI.com](https://app.freecurrencyapi.com/register) 

## Steps to follow
1. Ensure that the repository has been cloned locally, to do this, run the command `git clone https://github.com/NickBurness/Summative-1.git` from a terminal
2. Add your own `.env `file to the `/src` folder of the repo and add the following data to this file:

```
PORT = 3000
TEST = This is a value purely for unit tests
API_KEY = <INSERT_YOUR_API_KEY_FROM_THE_FreeCurrencyAPI_HERE>
```

Nb. Make sure to replace the value for *API_KEY* with your own API key from the FreeCurrencyAPI service.

2. Making sure you are in the `/src` folder of the repo, and then run the command `npm start` from a terminal
3. This will begin running the application, accessible in any web browser by navigating to `http://localhost:3000`
4. For development, test and production configurations:

Add the following files to the `src` folder manually: 
- `.env.development`
- `.env.test`
- `.env.production` 

Nb. populate these files with the same keys as your `.env` file in step 2, making sure to replace the appropriate values with new values specific to each environments configuration.

# Technical Breakdown
## Algorithms
### Exchange Rates Matrix 
Calculates the exchange rates between all other available currencies in the system in order to create a matrix of exchange rates. This algorithm uses two loops, one to iterate over all currencies and another loop to compare the rates between the currencies.  
The function `calculateExchangeRates` has a time complexity of O(n^2), where n is the number of currencies.
![calculateExchangeRates function](https://github.com/NickBurness/Summative-1/blob/main/docs/calculateExchangeRates.png)

### Convert Currency
When the user requests to convert an amount from one currency to another it calls a script held on the client-side to calculate the result.  
The function `convertCurrency` has a time complexity of O(1), which means it executes in constant time regardless of the size of the input. 
![convertCurrency function](https://github.com/NickBurness/Summative-1/blob/main/docs/convertCurrencyFunction.png)

### Environment Selection
A development, test and production environment has been devised for the application. A configuration file for each of these environments is included into the project, but ignored from the source code using the projects .gitignore file fors security reasons. 

![Environment specific .env files](https://github.com/NickBurness/Summative-1/blob/main/docs/environmental-dotenv.png)
The algorithm for selecting the active environment is defined in the config.js file, it uses `process.env.NODE_ENV` to determine the active environment and select the appropriate secrets file to use in that environment. This functionality could be utilised to boost the overall usability, reliability and scalability through the development of a continuous improvement/continuous deployment (CI/CD) pipeline. 
![Algorithm used to select the active environment](https://github.com/NickBurness/Summative-1/blob/main/docs/enviroment-algorithm.png)

## Code Repository Structure
1. `/src` Folder
All application code is stored within this directory.
2. `/config` Folder
The `config.js` file is responsible for loading and storing configuration settings.
3. `/models` Folder
The `currency.js` file defines the structure of currency data
4. `/public` Folder
This folder serves all of the static files that the web app needs. It contains subfolders to store each type of static file for the application.  
- `/css`contains the web pages stylesheet
- `/js` contains an algorithm to be performed client-side
- `/svgs` contains flag images
5. `/services` Folder
The `currencyService.js` folder contains a class named `CurrencyService` that is responsible for interacting with the third-party API.
6. `/repositories` Folder
The `currencyRepository.js` folder contains a class named `CurrencyRepository` that is responsible for gathering, transforming and initialising the applications data.
7. `/test` Folder
The test folder contains the systems unit tests
8. `/utils` Folder
This folder contains a helper that support the system with mapping currencies with countries.  
9. `/views` Folder
The `/views` folder contains EJS (Embedded JavaScript) template files, used to render the different web pages.
10. `app.js`
The entry point for the application

### Data Access Methods
Available from `CurrencyRepository.js` 
- `findAll()`: Returns all currencies.
- `findByCode(code)`: Find a currency by code (e.g., USD, EUR).
- `findByRateRange(minRate, maxRate)`: Finds currencies within an exchange rate range.
- `count()`: Returns the total number of available currencies.

# System Design 
The system has been designed with scalability in mind, The service (`currencyService.js`) and repository (`currencyRepository.js`) layers ensure that if there is replacement of the API used to gather data, any subsequent and required changes would only be necessary in the aforementioned files, with the exception of configuration details.
The projects code structure enables developers to add new models, repositories and services to handle additional features such as historic currency rate tracking and user authentication. In addition to this, the system makes use of client-side JavaScript to perform real-time currency conversion, offloading non-sensitive work from the server and optimising performance.

## Design Patterns 
### MVC
The Currency Converter application follows the Model-View-Controller (MVC) pattern to develop the user interface.
- Model: Represented by `/models/currency.js`, which defines the structure and behavior of currency data.
- View: Handled by the EJS files inside `/views`, which render data for the frontend.
- Controller: The currency service and repository classes play the role of the controller to manage logic and process requests.
![Figure of the MVC pattern](https://github.com/NickBurness/Summative-1/blob/main/docs/MVC.png)
Image sourced from [https://developer.mozilla.org/en-US/docs/Glossary/MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

### Service and Repository Pattern
- The `CurrencyService` class is responsible for interacting with the FreeCurrencyAPI  to get data about currencies and exchange rates. The role of this service is to abstract interaction with the API and provide a simplified interface for fetching all the data the system needs. This aligns with the Service Pattern, where the service class handles business logic and external system communication. Other parts of the application interact with this service rather than directly with the API.
- The `CurrencyRepository` class serves as a separate layer that interacts with the data fetched by the `CurrencyService`. The repository is responsible for interacting with the service and transforming it’s data into the`Currency`model. The repository pattern is used to abstract the complexity of interacting with the service and provides a clean interface for other parts of the application to access the data. 

# Evaluation
As the developed application meets all of the mandatory requirements, overall, I feel the project has been successful. The designed service prioritises scalability through an efficient and well-considered system design. It considers the overall performance, and usability by passing non-sensitive logic to the client. Security measures ensure sensitive information, such as the API Key, are hidden from the version control.  

The prototype/wireframes designed in Figma made building a custom frontend for the application much easier, by providing a a visual reference to aid the development of CSS. 

The incremental approach adopted for this project, facilitated by a Git branching strategy and the use of GitHub's project management Kanban board, significantly simplified the processes of designing, developing, tracking, and reviewing feature tickets. While not all tools were utilised to their full potential, those that were had a positive impact on the project and supported the rapid development of an MVP.

The effective use of design patterns creates a clear separation of concerns in the projects code structure and makes it easier for other developers to understand how the code works. I also feel that every component and function has been well named with little room for ambiguity in the responsibilities of each class or folder in the project.  

Scalability has been considered in the systems current design. For example, a historic currency rates tracking feature can be developed to extend the systems capabilities without upgrading to a paid for premium version of the API it depends on. The implementation of a database to store the currently fetched data periodically with a timestamp can be added with minimal developer effort.  

However, there are still areas for improvement and weaknesses in the current system. Currently exchange rates data is only gathered on system startup, instead of on a periodic timer. Also logging messages are limited to `console.log` statements, instead of using a more official system that provides useful features related to system auditing.  

As for potential threats to the applications, the largest threat would be the dependency on a single API, this poses a significant risk if there are ever any changes in the data format or endpoints it relies on. Additionally, potential security and usability vulnerabilities are not fully considered as the system lacks high-quality input validation and sanitization.

If more time were available for development on this project, the opportunities and threats identified would be good areas to build on the project from its current MVP state. 
