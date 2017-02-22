const webdriverio = require('webdriverio');

const options = {
    desiredCapabilities: {
        browserName: 'chrome',
    },
    logLevel: 'error',
};
const browser = webdriverio.remote(options);
browser
    .init()
    .url('http://www.webdriver.io')
    .$('//a[@href="/api.html"]').then((el) => {
    el.click().then(() => browser.waitForVisible('#WebdriverIO-API-Docs'));
})
    .catch((error) => {
        console.log(error);
    })
    .end();
