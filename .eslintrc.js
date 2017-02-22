module.exports = {
  "extends": "airbnb",
  "rules": {
    "indent": 0,
    "func-names": "off",
  },
  "plugins": ["webdriverio"],
  "env": {
    "webdriverio/wdio": true,
    "mocha": true,
    "browser": true
  }
}
