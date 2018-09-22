import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import CheckboxesPage from '../pages/Checkboxes';

describe('Add command test', () => {
    it('Checkboxes test', () => {
        NavigationMenu.loadNavigationMenu();
        NavigationMenu.clickCheckboxesPage();
        assert.equal(CheckboxesPage.getPageHeader(), 'Checkboxes');
        assert.isNotTrue(CheckboxesPage.checkboxOne.isSelected());
        assert.isTrue(CheckboxesPage.checkboxTwo.isSelected());

        CheckboxesPage.checkboxOne.click();
        CheckboxesPage.checkboxTwo.click();
        assert.equal(CheckboxesPage.checkboxOne.isSelected(), true);
        assert.equal(CheckboxesPage.checkboxTwo.isSelected(), false);

        CheckboxesPage.checkboxOne.click();
        assert.equal(CheckboxesPage.checkboxOne.isSelected(), false);
        assert.equal(CheckboxesPage.checkboxTwo.isSelected(), false);

        CheckboxesPage.checkboxOne.click();
        CheckboxesPage.checkboxTwo.click();
        assert.equal(CheckboxesPage.checkboxOne.isSelected(), true);
        assert.equal(CheckboxesPage.checkboxTwo.isSelected(), true);
    });
});
