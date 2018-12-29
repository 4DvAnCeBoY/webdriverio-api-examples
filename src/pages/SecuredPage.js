import BasePage from './BasePage';
import screenPresenceLocators from '../selectors/screenPresenceLocators';

class SecuredPage extends BasePage {
    constructor() {
        super();
        this.logoutButtonLocator = 'a.radius';
    }

    get logoutButton() {
        return $(this.logoutButtonLocator);
    }

    clickLogout() {
        this.logoutButton.click();
        browser.waitForVisible(screenPresenceLocators.login);
    }
}
module.exports = new SecuredPage();
