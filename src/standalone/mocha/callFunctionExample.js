const webdriverio = require('webdriverio');

const options = { desiredCapabilities: { browserName: 'chrome' } };
const submitFormWithInvalidInput = require('../lib/submitFormWithInvalidInput');

describe('Mocha standalone without wdio mocha test runner.', function () {
    this.timeout(99999999);
    let client;

    before(() => {
        client = webdriverio.remote(options);
        return client.init();
    });

    it('test', () => client
        .url('http://localhost:9292/login')
        .waitForVisible('#username')
        .call(submitFormWithInvalidInput));

    after(() => client.end());
});
