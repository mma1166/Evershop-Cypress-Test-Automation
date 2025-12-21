# EverShop Cypress Automation Project

## 📋 Project Overview

This project is an end-to-end automation testing suite for the **EverShop** e-commerce demo application using **Cypress** with **Cucumber BDD** framework. The test suite covers critical user journeys including account creation, authentication, address management, product search, shopping cart operations, and checkout functionality.

## 🚀 Features

- **BDD Framework**: Cucumber integration with Gherkin syntax for readable test scenarios
- **Page Object Model**: Organized locators and reusable data classes
- **Multiple Test Execution Modes**: Interactive and headless testing options
- **Allure Reporting**: Comprehensive test reports with Allure integration
- **Tag-based Execution**: Run specific test scenarios using tags
- **Cross-browser Support**: Configured for Chrome browser testing

## 🧪 Test Coverage

### Automated Test Scenarios

The test suite covers the following e-commerce workflows:

1. **User Account Creation** - Registration with full name, email, and password
2. **User Authentication** - Login and account verification
3. **Address Management** - Adding new delivery/billing addresses
4. **Product Search** - Searching and viewing product details
5. **Add to Cart** - Product variant selection and cart operations
6. **Complete Checkout** - End-to-end order placement with payment

## 🛠️ Technologies & Tools

- **Cypress**: v12.17.4 - End-to-end testing framework
- **Cucumber**: v6.0.7 - BDD framework
- **@badeball/cypress-cucumber-preprocessor**: v15.0.0 - Cucumber integration for Cypress
- **cypress-xpath**: v2.0.1 - XPath selector support
- **@shelex/cypress-allure-plugin**: v2.40.0 - Allure reporting integration
- **Node.js**: Required runtime environment

## 📁 Project Structure

```
evershop_cypress_automation/
├── cypress/
│   ├── data/
│   │   └── data.js                     # Test data and constants
│   ├── downloads/                      # Downloaded files during tests
│   ├── e2e/
│   │   ├── features/
│   │   │   └── SmokeTest.feature      # BDD feature file with test scenarios
│   │   └── step_definitions/
│   │       └── SetpDefinations.js     # Step implementations
│   ├── fixtures/
│   │   └── example.json               # Test fixtures
│   ├── Locators/
│   │   └── Locators.js                # Page element locators (XPath)
│   ├── screenshots/                    # Test failure screenshots
│   ├── support/
│   │   ├── commands.js                # Custom Cypress commands
│   │   └── e2e.js                     # Global test configuration
│   └── videos/                         # Test execution recordings
├── cypress.config.js                   # Cypress configuration
├── jsconfig.json                       # JavaScript configuration
└── package.json                        # Project dependencies
```

## 📥 Installation Guide

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git**

### Cloning the Repository

1. Open your terminal/command prompt

2. Clone the repository:
```bash
git clone https://github.com/mma1166/Evershop-Cypress-Test-Automation.git
```

3. Navigate to the project directory:
```bash
cd Evershop-Cypress-Test-Automation
```

### Installing Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- Cypress testing framework
- Cucumber preprocessor and BDD dependencies
- Allure reporting plugin
- Additional Cypress plugins (xpath, iframe, file-upload)
- All other project dependencies

## ▶️ Running Tests

### Run All Tests in Headed Mode

Execute the complete test suite with visible browser:

```bash
npx cypress run --spec "cypress/e2e/features/SmokeTest.feature" --headed --browser chrome
```

## 🔗 Useful Links

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Documentation](https://cucumber.io/docs/cucumber/)
- [EverShop Demo Application](https://demo.evershop.io/)
- [Allure Reports](https://docs.qameta.io/allure/)

---

**Happy Testing! 🎯**
