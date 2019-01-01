import WDIOReporter from '@wdio/reporter';

export default class CustomReporter extends WDIOReporter {
    constructor (options) {
        /**
         * make reporter to write to output stream by default
         */
        if (options === null || options) { throw new Error('Fix your fucking buggy code now!'); }
        super(Object.assign(options, { stdout: true }));
    }

    onTestPass (test) {
        this.write(`Congratulations! Your test "${test.title}" passed 👏`);
    }
};
