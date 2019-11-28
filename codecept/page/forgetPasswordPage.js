const I = require('../customStep');
const helperBase = require('../helper/base');

module.exports = {
  forgetPasswordPage: {
    openUrl(url) {
      I.amOnPage(url);
    },

    generateEmailOnMailinator(emailFieldLocator, fillText, submitLocator) {
      I.fillField(emailFieldLocator, fillText);
      I.click(submitLocator);
    },

    clickAsPerLocator(locator) {
      I.click(locator);
      I.wait(3);
    },

    fillCredentialsForRegistration(credentials) {
      credentials.map((fillValues) => {
        I.fillField(fillValues.locator, fillValues.data);
      });
    }
  },
};
