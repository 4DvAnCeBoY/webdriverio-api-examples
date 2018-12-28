# webdriverio-api-examples
This repo contains examples of how to create page objects and tests using [webdriverio version 5.0](https://github.com/webdriverio/webdriverio/tree/master/packages) and [ES6](http://es6-features.org/#Constants). The application under test is tourdedave's "[the-internet](https://github.com/tourdedave/the-internet)" project which contains examples of hard to automate pages. The test runner is the [wdio-mocha-framework](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-mocha-framework). 

This project was created to serve as a reference to others interested in ES6 webdriver.io tests.

# Dependencies
* Node.js - The latest [LTS release](https://nodejs.org/en/)
* Java -- Needed to run the selenium server
* Chrome.

# Test execution
To run the tests, clone the latest version of this repo then install the node modules using ```npm install```. Afterwards execute ```npm run test```.

To run a test by itself, use ```./node_modules/.bin/wdio --spec <path to test> wdio.conf.js```
