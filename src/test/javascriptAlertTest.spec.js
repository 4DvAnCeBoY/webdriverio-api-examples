import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import JavaScriptAlertsPage from '../pages/JavascriptAlertsPage';

describe('JavaScript Alert test', () => {
    before('setup', () => {
        NavigationMenu.loadNavigationMenu();
        NavigationMenu.clickJavaScriptAlertsPage();
    });

    it('JavaScript Alert test yay', () => {
        assert.equal(JavaScriptAlertsPage.getPageHeader(), 'JavaScript Alerts');
        JavaScriptAlertsPage.clickJSAlertButton();
        JavaScriptAlertsPage.closeAlert();
        assert.equal(JavaScriptAlertsPage.getResult(), 'You successfuly clicked an alert');
    });

    it('JavaScript confirm test yay', () => {
        JavaScriptAlertsPage.clickJSConfirmButton();
        JavaScriptAlertsPage.closeAlert();
        assert.equal(JavaScriptAlertsPage.getResult(), 'You clicked: Ok');
    });
});
