// https://stackoverflow.com/questions/32723167/how-to-programmatically-skip-a-test-in-mocha
const assert = require('assert');

describe('Skipping tests in mocha example', function () {
    const env = 'PRODUCTION';

    before(() => {
        if (env === 'PRODUCTION') {
            this.skip();
        }
    });

    it('assert 1', () => {
        const val = 1;
        assert(val === 1, 'test');
    });

    it('assert 2', () => {
        const val = 1;
        assert(val === 1, 'test');
    });

    it('assert 3', () => {
        const val = 1;
        assert(val === 1, 'test');
    });
});
