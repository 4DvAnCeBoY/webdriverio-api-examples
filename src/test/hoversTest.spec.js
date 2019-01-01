import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import HoversPage from '../pages/HoversPage';

describe('Hovers test', () => {
    it('Custom test', () => {
        browser.url('http://www.webdriver.io');
        const h2 = $('h2');
        // console.log(h2.customCommand1000());
        const h3 = $$('a');
        browser.debug();
    });

    it.only('Hover over image test', () => {
        for (let i = 0; i < 3; i += 1) {
            NavigationMenu.loadNavigationMenu();
            NavigationMenu.clickHoversPage();
            HoversPage.hoverOverImage(i);
            assert.equal(HoversPage.getUserName(i), `user${i + 1}`);
        }
    });
});
