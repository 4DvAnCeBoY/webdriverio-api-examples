module.exports = function () {
    console.log('Did I execute');
    return this.click('.fa-sign-in')
        .waitForVisible('#flash', 3000);
};
