import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import LoginPage from '../pages/LoginPage';
import SecuredPage from '../pages/SecuredPage';
import pageProperties from '../config/pageMessages.json';

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const incorrectUsername = 'timsmith';
const incorrectPassword = 'qwerty100';
const usernameErrorMessage = 'Your username is invalid!';
const passwordErrorMessage = 'Your password is invalid!';

describe('Login functionality test suite', () => {
    before('setup', () => {
        NavigationMenu.loadNavigationMenu();
        NavigationMenu.clickFormAuthentication();
    });

    it('Login Test', () => {
        const msg = pageProperties.loginSubheader;
        assert.equal(LoginPage.getPageHeader(), 'Login Page', 'Page header equals login.');
        assert.equal(LoginPage.getPageSubHeader(), msg, 'Subheader is correct');
        assert.equal(LoginPage.getFooterText(), 'Powered by Elemental Selenium');

        LoginPage.login(username, password);
        assert.equal(SecuredPage.getPageMessage(), 'You logged into a secure area!', 'Secured are msg visible.');
        assert.equal(SecuredPage.getPageHeader(), 'Secure Area', 'Page header = Secure Area');
        assert.equal(SecuredPage.getFooterText(), 'Powered by Elemental Selenium');

        SecuredPage.clickLogout();
        assert.notEqual(SecuredPage.getPageHeader(), 'Secure Area', 'Logoff redirects to Login Page');
        assert.equal(SecuredPage.getPageMessage(), 'You logged out of the secure area!');
    });

    it('Validation Message Test', () => {
        // enter incorrect username
        LoginPage.username.setValue(incorrectUsername);
        LoginPage.clickSubmitButton();
        assert.equal(LoginPage.getPageMessage(), usernameErrorMessage);

        // enter incorrect password
        LoginPage.username.setValue(username);
        LoginPage.password.setValue(incorrectPassword);
        LoginPage.clickSubmitButton();
        assert.equal(LoginPage.getPageMessage(), passwordErrorMessage);

        // Submit blank form
        LoginPage.enterLoginInformation('', '');
        LoginPage.clickSubmitButton();
        assert.equal(LoginPage.getPageMessage(), usernameErrorMessage);
    });

    it('Close Validation Message Test', () => {
        LoginPage.enterLoginInformation(incorrectUsername, incorrectPassword);
        LoginPage.clickSubmitButton();
        assert.equal(LoginPage.getPageMessage(), usernameErrorMessage);
        LoginPage.closePageMessage();

        let isCloseButtonClicked = false;
        try {
            LoginPage.closePageMessage();
            isCloseButtonClicked = true;
        } catch (err) {
            assert.notEqual(isCloseButtonClicked, true);
        }
    });
});
