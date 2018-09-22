const webdriverio = require('webdriverio');

const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);
const submitFormWithInvalidInput = require('../lib/submitFormWithInvalidInput');

client
    .init()
    .url('http://localhost:9292/login')
    .waitForVisible('#username')
    .call(submitFormWithInvalidInput)
    .catch((error) => {
        console.log(error);
    })
    .end();
