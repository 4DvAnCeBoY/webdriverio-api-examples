import screenPresenceLocators from '../selectors/screenPresenceLocators';

class NavigationMenu {
    constructor() {
        this.screenLocators = screenPresenceLocators;
        this.homePageUrl = '/';
        this.loginUrl = '/login';
        this.checkboxesUrl = '/checkboxes';
        this.hoversUrl = '/hovers';
        this.javascriptAlertsUrl = '/javascript_alerts';
    }

    loadNavigationMenu() {
        browser.url(this.homePageUrl);
    }

    clickFormAuthentication() {
        browser.url(this.loginUrl);
        browser.$(this.screenLocators.login).waitForDisplayed();
    }

    loadCheckboxesPage() {
        browser.url(this.checkboxesUrl);
        browser.$(this.screenLocators.checkboxes).waitForDisplayed();
    }

    clickHoversPage() {
        browser.url(this.hoversUrl);
        browser.$(this.screenLocators.hovers).waitForDisplayed();
    }

    clickJavaScriptAlertsPage() {
        browser.url(this.javascriptAlertsUrl);
        browser.$(this.screenLocators.javascriptAlertPage).waitForDisplayed();
    }
}

module.exports = new NavigationMenu();
