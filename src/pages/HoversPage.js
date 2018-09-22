import BasePage from './BasePage';
import screenPresenceLocators from '../selectors/screenPresenceLocators';

class HoversPage extends BasePage {
    constructor() {
        super();
        this.screenPresenceLocators = screenPresenceLocators;
        this.captionsLocator = '.figcaption';
        this.figureLocator = '.figure';
    }

    get captions() {
        return browser.$$(this.captionsLocator);
    }

    hoverOverImage(position) {
        const figure = browser.$$(this.figureLocator)[position];
        figure.moveToObject('img');
        browser.waitForVisible(this.captionsLocator);
    }

    clickViewProfile(position) {
        this.hoverOverImage(position);
        const captionSection = browser.$$(this.captionsLocator)[position];
        const link = captionSection.$('a');
        link.click();
        browser.waitForVisible(screenPresenceLocators.userprofile);
    }

    returnToHoversPage() {
        browser.back();
        browser.waitForVisible(this.screenPresenceLocators.hovers);
    }

    getUserName(position) {
        this.hoverOverImage(position);
        const captionSection = browser.$$(this.captionsLocator)[position];
        return captionSection.$('h5').getText().trim().replace('name: ', '');
    }
}
module.exports = new HoversPage();
