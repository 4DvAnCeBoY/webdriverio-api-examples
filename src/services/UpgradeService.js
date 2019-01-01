/* eslint-disable */
// Element prototype
// https://github.com/webdriverio/webdriverio/issues/1796

const addCommandsToElement = require('./addCommandsToElement');

class UpgradeService {

    before() {
        browser.addCommand("waitForVisible", async function(selector, ms, reverse = false) {
            const e = await $(selector);
            e.waitForDisplayed(ms, reverse = false);
        });

        browser.addCommand("alertAccept", async function() {
            browser.acceptAlert();
        });
    }

    afterCommand(commandName, args, result, error) {
        const element = result;
        if (commandName === '$') {
            addCommandsToElement(element);
        }

        if (commandName === '$$') {
            const elements = result;
            elements.forEach(element => {
                addCommandsToElement(element);
            });
        }
    };
}
module.exports = new UpgradeService();