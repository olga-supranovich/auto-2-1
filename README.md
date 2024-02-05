# Testing with Jest

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [Using npm](#using-npm)
  - [Jest CLI](#jest-cli)
- [Code Coverage](#code-coverage)
  - [Installation](#installation-of-coverage-plugin)
  - [Running Tests with Coverage](#running-tests-with-coverage)
  - [Types of code coverage](#types-of-code-coverage)

## Prerequisites
Before running the tests, make sure you have the following prerequisites installed on your machine:
- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Installation Guide](https://www.npmjs.com/get-npm)

## Installation
To set up the project and install the required dependencies, follow these steps:
1. Clone the repository: `git clone https://github.com/olga-supranovich/auto-repo.git`
2. Navigate to the project directory: `cd your-project`
3. Install dependencies: `npm install`


## Running Tests
### Using npm
Execute the following command to run the Jest tests with npm:
```bash
npm run test
```

### Jest CLI
If you prefer running tests using the Jest command-line interface (CLI), you can use:
```bash
npx jest
```

## Code coverage

To identify areas that may lack proper testing we use code coverage that measures the percentage of source code our tests execute. 
### Installation of Coverage Plugin
For code coverage analysis, we use the babel-plugin-istanbul plugin. To install it, run the following command:
```
npm install --save-dev babel-plugin-istanbul
```
Make sure to check if it's already listed in the devDependencies section of your package.json file.

### Running Tests with Coverage
To run tests with code coverage and generate a detailed report, use the following command:
```bash
npx jest --coverage
```
This command will execute Jest and generate coverage metrics for your codebase. You can view a detailed HTML report by opening the coverage report file in your browser. It's generated here **'your-project/coverage/lcov-report/index.html'**.
This HTML report provides insights into different coverage metrics, such as statements, functions, branches, and lines, helping you assess the comprehensiveness of your tests and identify areas that may need more attention.

### Types of code coverage

- Function coverage -  captures the percentage of functions in your code that your tests call.
- Line coverage - measures the percentage of executable code lines that your test suite executed. Note that line coverage doesn’t take into account declaration statements, because they are not executable.
- Branch coverage - measures the percentage of executed branches or decision points in the code, such as if statements or loops. It determines whether tests examine both the true and false branches of conditional statements.
- Statement coverage - measures the percentage of statements in your code that your tests execute. If you always write one statement per line, your line coverage will be similar to your statement coverage.

  In summary, while statement and line coverage are quite similar, focusing on individual lines of code, function coverage looks at the coverage at the function level, and branch coverage analyzes the coverage of different decision points in your code. Each metric provides a different perspective on how thoroughly your code is tested, helping you identify areas for improvement in your test suite.

