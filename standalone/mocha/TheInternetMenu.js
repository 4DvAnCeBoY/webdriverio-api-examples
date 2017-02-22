const webdriverio = require('webdriverio');

const options = { desiredCapabilities: { browserName: 'chrome' } };

describe('Mocha standalone without wdio mocha test runner.', function () {
    this.timeout(60000);
    let client;

    before(() => {
        client = webdriverio.remote(options);
        return client.init();
    });

    it('test', () => client
        .url('http://localhost:9292/')
        .getAttribute('ul > li > a', 'href')
        .then((links) => {
            links.forEach((link) => {
                console.log(`L: ${link}`);
            });
        })
        .click('//a[text()=\'A/B Testing\']')
        .pause(5000)
        .end());

    after(() => client.end());
});
