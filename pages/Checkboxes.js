import BasePage from './BasePage';

class CheckboxesPage extends BasePage {
    constructor() {
        super();
        this.checkboxes = '#checkboxes > input';
    }

    get checkboxOne() {
        return browser.$$(this.checkboxes)[0];
    }

    get checkboxTwo() {
        return browser.$$(this.checkboxes)[1];
    }
}
module.exports = new CheckboxesPage();
