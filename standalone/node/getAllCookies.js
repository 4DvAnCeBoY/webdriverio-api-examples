const webdriverio = require('webdriverio');

const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);
const fs = require('fs');

client
    .init()
    .url(process.argv[2])
    .pause(5000)
    .getCookie()
    .then((cookie) => {
        fs.writeFile(process.argv[3], JSON.stringify(cookie, null, 4), () => {
            fs.readFile(process.argv[3], (err) => {
                if (err) {
                    throw err;
                }
            });
        });
        // console.log(cookie);
    })
    .catch((error) => {
        console.log(error);
    })
    .end();
