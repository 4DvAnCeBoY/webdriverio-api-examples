# webdriverio-api-examples
This repo contains examples of how to create page objects and tests using [webdriverio 5.0](https://github.com/webdriverio/webdriverio/tree/master/packages) and [ES6](http://es6-features.org/#Constants). The application under test is tourdedave's "[the-internet](https://github.com/tourdedave/the-internet)" project which contains examples of hard to automate pages. The test runner is the [wdio-mocha-framework](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-mocha-framework). 

This project was created to serve as a reference to others interested in ES6 webdriver.io tests.

# Dependencies
* Node.js - The latest [LTS release](https://nodejs.org/en/)
* Java -- Needed to run the selenium server
* Chrome.

# Test execution
1) Clone the latest version of this repo.
2) ```npm install```
3) ```npm run build```
4) ```npm run test```.

# Run standalone spec
To execute a standalone spec run  ``` .\node_modules\.bin\wdio --mochaOpts.require 'babel-register' --mochaOpts.timeout 9999999 --spec <path to test> .\wdio.conf.js```

Example:
```.\node_modules\.bin\wdio --mochaOpts.require 'babel-register' --mochaOpts.timeout 9999999 --spec .\src\test\hoversTest.spec.js .\wdio.conf.js```

When executing a standalone spec ```--mochaOpts.require 'babel-register'``` is required because I removed mochaOpts from wdio.conf file. This was done based on a recommendation from the mocha wiki [compilers deprecation](https://github.com/mochajs/mocha/wiki/compilers-deprecation) page.