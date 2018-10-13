import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import CheckboxesPage from '../pages/Checkboxes';

describe('Checkboxes test suite: ', () => {
    beforeEach(() => {
        NavigationMenu.loadCheckboxesPage();
    });

    it('Default state test', () => {
        assert.equal(CheckboxesPage.getPageHeader(), 'Checkboxes');
        assert.isNotTrue(CheckboxesPage.checkboxOne.isSelected());
        assert.isTrue(CheckboxesPage.checkboxTwo.isSelected());
    });

    it('Reverse default state', () => {
        CheckboxesPage.checkboxOne.click();
        CheckboxesPage.checkboxTwo.click();
        assert.equal(CheckboxesPage.checkboxOne.isSelected(), true);
        assert.equal(CheckboxesPage.checkboxTwo.isSelected(), false);
    });

    it('Both boxes checked', () => {
        CheckboxesPage.checkboxOne.click();
        assert.equal(CheckboxesPage.checkboxOne.isSelected(), true);
        assert.equal(CheckboxesPage.checkboxTwo.isSelected(), true);
    });

    it('Both boxes deselected', () => {
        CheckboxesPage.checkboxTwo.click();
        assert.equal(CheckboxesPage.checkboxOne.isSelected(), false);
        assert.equal(CheckboxesPage.checkboxTwo.isSelected(), false);
    });
});
