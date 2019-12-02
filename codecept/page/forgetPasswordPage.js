const I = require("../customStep");
const helperBase = require("../helper/base");
const { forgetPasswordLocator } = require("../locator/forgetPasswordLocator");

module.exports = {
  forgetPasswordPage: {
    openUrl(url) {
      I.wait(10);
      I.amOnPage(url);
    },

    generateEmailOnMailinator(emailFieldLocator, fillText, submitLocator) {
      I.fillField(emailFieldLocator, fillText);
      I.click(submitLocator);
    },

    clickAsPerLocator(locator) {
      I.waitForElement(locator);
      I.click(locator);
    },

    fillCredentialsForRegistration(credentials) {
      credentials.map(fillValues => {
        I.waitForElement(fillValues.locator);
        I.fillField(fillValues.locator, fillValues.data);
      });
      this.clickAsPerLocator(forgetPasswordLocator.policyAndTerms);
      this.clickAsPerLocator(forgetPasswordLocator.registerLocator);
    },

    setRandomEmail(userName) {
      I.fillField(forgetPasswordLocator.mailinatorEmailBox);
      I.click(forgetPasswordLocator.buttonToFinalizeMail);
    },

    checkElementExistence(locator, element) {
      I.seeElementExists(locator, element);
    },

    fillTheField(locator, value) {
      I.fillField(locator, value);
    },
  },
};
