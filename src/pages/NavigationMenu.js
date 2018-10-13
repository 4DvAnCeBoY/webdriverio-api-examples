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
        browser.waitForVisible(this.screenLocators.login);
    }

    loadCheckboxesPage() {
        browser.url(this.checkboxesUrl);
        browser.waitForVisible(this.screenLocators.checkboxes);
    }

    clickHoversPage() {
        browser.url(this.hoversUrl);
        browser.waitForVisible(this.screenLocators.hovers);
    }

    clickJavaScriptAlertsPage() {
        browser.url(this.javascriptAlertsUrl);
        browser.waitForVisible(this.screenLocators.javascriptAlertPage);
    }
}

module.exports = new NavigationMenu();
