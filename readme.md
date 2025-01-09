# Table of Contents
- [Proposal](#proposal)
- [Purpose](#purpose)
- [Project Requirements](#project-requirements)
  * [Mandatory](#mandatory)
  * [Nice to have](#nice-to-have)
- [Technologies](#technologies)
  * [Application](#application)
  * [App Dependencies](#app-dependencies)
  * [Node Dependencies](#node-dependencies)
  * [Other](#other)
- [Design Documentation](#design-documentation)
- [Workflow](#workflow)
- [Project Planning](#project-planning)
- [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Unit Testing](#unit-testing)
  * [Smoke Testing](#smoke-testing)
- [Set up and running the Web App](#set-up-and-running-the-web-app)
  * [Prerequisites](#prerequisites)
  * [Steps to follow](#steps-to-follow)
- [Evaluation](#evaluation)
  * [System Design](#system-design)
  * [Project Code breakdown](#project-code-breadkown)
  * [Design Patterns](#design-patterns)
  * [MVC](#mvc)
    + [Service and Repository Pattern](#service-and-repository-pattern)
    + [Singleton Pattern](#singleton-pattern)
  * [Architecture](#architechture)
  * [Strengths](#strengths)
  * [Weaknesses](#weaknesses)
  * [Opportunities](#opportunities)
  * [Threats](#threats)  
<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>  

# Proposal
A minimal viable product (MVP) for a currency converting application for the most popular global currencies.

# Purpose  
The product is intended to help users perform better financial planning, for example, holiday spending money planning or as a tool to support forex traders to make better investments.

# Project Requirements
## Mandatory 
- Needs to consume an API to fetch currency information such as name, symbol, rate.
- Needs to be able to fetch detailed information about as many currencies as possible
- The system needs to be performant, the service should not make excessive API calls, as to minimise the 3rd party API usage and make the service overall more reliable.
- The system needs to be able to calculate the currency rates for all available countries
- The system should be highly-performant and optimised for scalability
- The system needs to be able to accept a monetary amount from the user and be able convert it to a target currency
- The applications web pages should be dynamic and responsive for both mobile and desktop devices.
## Nice to have 
- Historic Currency Rates information using data visualisations
- Support for other currency pairs such as crypto (Bitcoin/Ethereum) and precious metals (Gold/Silver)

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
## Other Technologies
- Git (To manage and keep track of changes to the codebase over time)
- GitHub (Cloud based code storage service for managing Git repositories)

# Design Documentation
The user interface (UI) for the application has been created using prototyping tool Figma, to view the prototype you can go to [The Currency Converter App Prototype](https://www.figma.com/design/s0g37ImN1jyZIC76gmTkKC/Currency-Converter) or see snapshots of each designed page from the images below.

- Figma Design for the Currency Converter Page on Desktop  
![Figma Design for the Currency Converter Page - Desktop Variant](docs\CurrencyConverterDesign-DesktopView.png)  
- Figma Design for the Currency Converter Page on Mobile  
![Figma Design for the Currency Converter Page - Mobile Variant](docs\CurrencyConverterDesign-MobileView.png)    
- Figma Design for the Latest Rates Page on Desktop  
![Figma Design for the Latest Rates Page - Desktop Variant](docs\LatestRatesDesign-DesktopView.png)  
- Figma Design for the Latest Rates Page on Mobile  
![Figma Design for the Latest Rates Page - Mobile Variant](docs\LatestRatesDesign-MobileView.png)  
- Figma Design for the Charts Page on Desktop (Post MVP feature)  
![Figma Design for the Charts Page - Desktop Variant](docs\ChartsDesign-DesktopView.png)  
- Figma Design for the Charts Page on Mobile (Post MVP feature)  
![Figma Design for the Charts Page - Mobile Variant](docs\ChartsDesign-MobileView.png)  

# Project Planning
## Requirements Analysis
Requirements Analysis has been carried out separately and before any development work has commenced.

## KANBAN GitHub Projects
GitHub projects have been used as a ticketing system to manage the activities related to the projects development. This is for all activities related to the design, build and testing stages of the product. 

 [Currency Converter GitHub Project](https://github.com/users/NickBurness/projects/2)
 ![GitHub Projects Kanban Board](docs\GitHub-KanbanBoard.png)

## Git Workflow
The Git workflow adopted for this project is the *Feature Branch* Git workflow. Instead of committing directly to the main branch on the project, which represents the official project history. A new branch is created from main every time they work starts on a new feature, when development work is completed the feature branch is merged into main after a pull request is created and a code review has taken place.

# Unit Testing
Each custom class or function has been tested using a Test-Driven-Development (TDD) approach.
To run the Unit tests ensure that you are in the `/src` folder of the repo and run the command `npm test` from a terminal.

![Image of Unit Tests Suite Results](docs\UnitTestSuiteResults.png)


# Set up and running the Web App
## Prerequisites
1. Have NodeJS installed, run the command `node --version` from a terminal to verify
    - If you do not have NodeJS installed, [Download the latest version on their website](https://nodejs.org/en/download)  
2. Have Node Package Manager (NPM) is installed to get the app dependencies by running the command `npm --version` from a terminal to verify
3. Have a FreeCurrencyAPI API Key, to get one simply [register to the FreeCurrencyAPI.com](https://app.freecurrencyapi.com/register) 

## Steps to follow
1. Ensure that the repository has been cloned locally, to do this you can run the command `git clone https://github.com/NickBurness/Summative-1.git` from a terminal
2. Add a `.env `file to the `/src` folder of the repo and add the below data to this file, making sure to replace the value for *API_KEY* with your own API key from registering to the FreeCurrencyAPI service.

```
PORT = 3000
TEST = This is a value purely for unit tests
API_KEY = <INSERT_YOUR_API_KEY_FROM_THE_FreeCurrencyAPI_HERE>
```

2. Making sure you are in the `/src` folder of the repo, then enter and run the command `npm start` from a terminal
3. This will begin running the service, accessible in a web browser by navigating to `http://localhost:3000`

# Technical Breakdown
## Algorithms
### Exchange Rates Matrix 
Calculates the exchange rates between all other available currencies in the system in order to create a matrix of exchange rates. This algorithm uses two loops, one to iterate over all currencies and another loop to compare the rates between the currencies.  
The function `calculateExchangeRates` has a time complexity of O(n^2), where n is the number of currencies.
![Image of the calculateExchangeRates function](docs\calculateExchangeRates.png)

### Convert Currency
When the user requests to convert an amount from one currency to another it calls a script held on the client-side to calculate the result.  
The function `convertCurrency` has a time complexity of O(1), which means it executes in constant time regardless of the size of the input. 
![Image of the code for the convertCurrency function](docs\convertCurrencyFunction.png)

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
The system has been designed with scalability in mind, The service (`currencyService.js`) and repository (`currencyRepository.js`) layers ensure that if there is a  need to scale or replace the external API used to gather data, any subsequent changes would only be necessary across these files, with the exception of configuration details such as API keys.
The application is set up to scale as new user needs and features are realised. The projects code structure enables developers to add new models, repositories and services to handle additional features such as historic currency rate tracking and user authentication. 
The systems also makes use of client-side JavaScript to perform real-time currency conversion, this offloads this non-sensitive work from the server, speeding up the user experience. 

## Design Patterns 
### MVC
The Currency Converter application follows the Model-View-Controller (MVC) pattern to develop the user interface.
- Model: Represented by `/models/currency.js`, which defines the structure and behavior of currency data.
- View: Handled by the EJS files inside `/views`, which render data for the frontend.
- Controller: The currency service and repository classes play the role of the controller to manage logic and process requests.
![Figure of the MVC pattern](docs\MVC.png)
Image sourced from [https://developer.mozilla.org/en-US/docs/Glossary/MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

### Service and Repository Pattern
- The `CurrencyService` class is responsible for interacting with the FreeCurrencyAPI consumed by the application to get data about currencies and exchange rates. The role of this service is to abstract interaction with this API and provides a simplified interface for fetching all of the data the application needs to operate. This aligns with the Service Pattern, where the service class handles business logic and external system communication, leaving other parts of the application to interact just with this service class rather than directly dealing with API calls in each class that depends on the fetched data.
- The `CurrencyRepository` class serves as a separate layer that interacts with the data provided by the `CurrencyService` class. The repository is responsible for fetching the data from the service and then transforming it into the `Currency` model and storing it in the applications memory. The repository pattern abstracts the complexity of interacting with the service, providing a clean interface for other parts of the application to access the data. Separating these distinct layers isolates data retrieval and manipulation, making it easier to change or scale.

### Singleton Pattern 
Lazy Initialisation has been performed through use of the `initialise()` method defined in the `CurrencyRepository` class. This method is called only once when the app starts, ensuring that 3rd party API calls are kept to a minimum by being only made once. This minimizes the use of resources, thus making the system more performant and reliable.

# Evaluation

The developed application meets all of the identified requirements, whilst prioritising scalability, performance, and usability. Security measures ensure sensitive information, such as the API Key is hidden from version control and usability and performance are enhanced by reducing the number of external API calls that are required.

Configuration settings and secrets are securely managed within the code. The program is well-structured, employing repository and service design patterns for clear separation of concerns. Error handling is implemented through Try/Catch blocks, particularly for third-party API calls. 

Early data initialisation ensures efficient usage of the third-party API, keeping the service well below usage limits. 

Custom functionality calculates all currency exchange rates based on USD.

The application follows the Model-View-Controller (MVC) pattern, with the model represented by `/models/currency.js`, views handled by EJS files in `/views`, and controllers managed by the currency service and repository classes. The service and repository patterns are also employed, with CurrencyService interacting with the third-party API and CurrencyRepository managing data transformation and storage. The Singleton pattern is used for lazy initialisation, minimising resource usage by making API calls only once at startup.

The system's design ensures scalability, allowing for easy adaptation to new user needs and features. The code structure supports the addition of new models, repositories, and services, facilitating the development of features such as historic currency rate tracking and user authentication. Client-side JavaScript is used for real-time currency conversion, enhancing user experience by offloading non-sensitive tasks from the server.

The application code is organized into several directories, each serving a specific purpose. The /src folder contains all application code, while the /config folder manages configuration settings. The /models folder defines the structure of currency data, and the /public folder serves static files needed by the web app. The /services folder contains the CurrencyService class, responsible for interacting with the third-party API, and the /repositories folder contains the CurrencyRepository class, which manages data transformation and initialization. The /test folder holds unit tests, and the /utils folder contains helpers for mapping currencies with countries. The /views folder contains EJS template files for rendering web pages, and app.js serves as the entry point for the application.

The system employs efficient algorithms for calculating exchange rates and converting currencies. The `calculateExchangeRates` function creates a matrix of exchange rates with a time complexity of O(n^2), while the `convertCurrency` function performs currency conversion with a time complexity of O(1).

However, there are areas for improvement. The application currently updates exchange rates only at startup, lacks a caching mechanism for API responses, and does not implement rate limiting for API endpoints. Additionally, documentation for API endpoints and response formats is missing, there is no automated testing, and logging is limited to console.log statements.

There are several opportunities for enhancement. Adding user accounts could allow for saved preferences, and implementing environment-specific configurations would support development, test, preproduction, and production environments. The design of the program also enables the potential development of a Historic Rates Tracking feature without needing to upgrade to a premium API version. This could involve periodic data collection and storage with timestamps. Establishing a CI/CD pipeline would automate testing and improve deployment times.

Potential threats include dependency on a single API, which poses risks if there are changes in data format or endpoint names. There is also a risk of rate limiting if the API provider changes usage quotas, and the system currently lacks a fallback mechanism if the API is unavailable. Additionally, there are potential security vulnerabilities from unvalidated input, and changes to the currency provider API could break functionality. Finally, there is uncertainty about how the system would perform under heavy load.


## before
The developed application is completely functional against the initial requirements. The structure of the code prioritises scalability, performance and usability.

Security has been considered by ensuring that sensitive information such as the API Key is hidden from the codes version control. 

Usability and performance has been considered by ensuring that the application minimises the number of  external API calls that they need to make.

Configuration settings and secrets are handled by the system and stored in the code in a secure manner.
From a code perspective, the program is well structured. The use of the repository and service design patterns to provide a clear separation of concerns is one example of this. Furthermore, there is a good level of error handling throughout the system through the effective use of Try/Catch code blocks, for example when making calls to the third-party API data source. 
By initialising the programs data early efficient usage of the third-party API has been carried out, this ensures that the service always remains greatly below the allowed usage limits. 
Additionally, custom functionality is in place to calculate all currency exchange rates once the system has fetched the exchange rates based on only US Dollars only. 
There is no formal method to validate and sanitise input data. 
Parallel data fetching using Promise.all for better performance
Environment variable management for secure configuration

### Weaknesses
Static exchange rates (updated only at startup)
No caching mechanism implemented for API responses
No rate limiting implementation for API endpoints
Missing documentation for API endpoints and response formats
No automated testing implementation visible
Lacks logging strategy beyond console.log statements

### Opportunities
Add user accounts for saved preferences
Currently there are no environments for this application as it is not being hosted. However, config.js could load different configurations if developer, test, preproduction and production environments were created.
Environment-Specific Configuration: It’s important to ensure that config.js loads different configurations depending on whether the app is running in development, production, or testing environments.
The design of the program enables possible development of an Historic Rates Tracking feature without any need to upgrade to a Premium version of the third party API. Instead of the app gathering all of the required data during startup it could be operated on a periodic daily timer. This would allow the system to gather, transform and store the data it retrieves on a daily basis into a data store such as a database alongside a unique timestamp. This would give the service a method of retrieving historic rates starting from the day the feature is introduced.
CI/CD pipeline: As to create a method of automating the testing and rapidly improving deployment times.

### Threats
Systems initial data is totally dependent on a single API, any changes to this such as the format of the retrieved data or endpoint name change could break the current service.
Although the applications design avoids making redundant calls to the API it depends on, if the provider changed the usage quotas, there is a risk of being rate limited, which the system is not yet designed to handle.
There is no fallback mechanism if the API to fetch data is unavailable. The accuracy of the data depends on the API it is fetched from being correct in the first place.
Potential security vulnerabilities from unvalidated input
Currency provider API changes could break functionality
Unsure how this system would operate under heavy load 