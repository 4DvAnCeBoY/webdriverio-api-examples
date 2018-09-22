// https://stackoverflow.com/questions/32723167/how-to-programmatically-skip-a-test-in-mocha
const assert = require('assert');

describe('Add command test', function () {
    const env = 'PRODUCTION';

    it('assert 1', () => {
        if (env !== 'PRODUCTION') {
            const val = 1;
            assert(val === 1, 'test');
        } else {
            this.skip();
        }
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
