module.exports = element => {
    element.addCommand('waitForVisible', async (ms, reverse = false) => {
       await element.waitForDisplayed(ms, reverse = false);   
    });

    element.addCommand('isVisible', async () => {
        await element.isDisplayed();   
    });
}