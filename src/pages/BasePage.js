import baseSelectors from '../selectors/basePage';

class BasePage {
    constructor() {
        this.baseSelectors = baseSelectors;
    }

    get subheader() {
        return browser.$(this.baseSelectors.pageSubHeaderLocator);
    }

    get footerText() {
        return browser.$(this.baseSelectors.footerTextLocator);
    }

    get pageMessage() {
        return browser.$(this.baseSelectors.pageMessageLocator);
    }

    get closeButton() {
        return browser.$(this.baseSelectors.closeButton);
    }

    getPageHeader() {
        const h2Selector = 'div.example h2';
        const h3Selector = 'div.example h3';
        if (browser.$$(this.baseSelectors.h2Selector).length > 0) {
            return $(h2Selector).getText();
        }
        return browser.$(h3Selector).getText();
    }

    getPageSubHeader() {
        return this.subheader.getText();
    }

    getFooterText() {
        return this.footerText.getText();
    }

    getPageMessage() {
        return this.pageMessage.getText().split('\n')[0].trim();
    }

    closePageMessage() {
        this.closeButton.click();
        browser.waitUntil(() => !this.closeButton.isVisible());
    }
}

module.exports = BasePage;
