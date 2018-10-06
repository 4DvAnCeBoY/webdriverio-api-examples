import { assert as a } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import CheckboxesPage from '../pages/Checkboxes';

const moveTo = element => {
    browser.actions([{
        "type": "pointer",
        "id": "finger1",
        "parameters": {"pointerType": "mouse"},
        "actions": [
            {"type": "pointerMove", "duration": 0, "x": element.getLocation().x, "y": element.getLocation().y},
        ]
    }]);
}

describe('Add command test', () => {
    it('Checkboxes test', () => {
        NavigationMenu.loadNavigationMenu();
        NavigationMenu.clickCheckboxesPage();
        a.equal(CheckboxesPage.getPageHeader(), 'Checkboxes');
        a.isNotTrue(CheckboxesPage.checkboxOne.isSelected());
        a.isTrue(CheckboxesPage.checkboxTwo.isSelected());

        // moveTo(CheckboxesPage.checkboxOne);

        CheckboxesPage.checkboxOne.click();
        CheckboxesPage.checkboxTwo.click();
        a.equal(CheckboxesPage.checkboxOne.isSelected(), true);
        a.equal(CheckboxesPage.checkboxTwo.isSelected(), false);

        CheckboxesPage.checkboxOne.click();
        a.equal(CheckboxesPage.checkboxOne.isSelected(), false);
        a.equal(CheckboxesPage.checkboxTwo.isSelected(), false);

        CheckboxesPage.checkboxOne.click();
        CheckboxesPage.checkboxTwo.click();
        a.equal(CheckboxesPage.checkboxOne.isSelected(), true);
        a.equal(CheckboxesPage.checkboxTwo.isSelected(), true);
    });
});
