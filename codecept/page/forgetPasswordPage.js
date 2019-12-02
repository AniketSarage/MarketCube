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
            helperBase.waitForElement(locator);
            I.click(locator);
        },

        fillCredentialsForRegistration(credentials) {
            credentials.map(fillValues => {
                helperBase.waitForElement(fillValues.locator);
                I.fillField(fillValues.locator, fillValues.data);
            });
            this.clickAsPerLocator(forgetPasswordLocator.policyAndTerms);
            this.clickAsPerLocator(forgetPasswordLocator.registerLocator);
        },

        checkElementExistence(locator, element) {
            I.seeElementExists(locator, element);
        },

        fillTheField(locator, value) {
            I.waitForElement(locator);
            I.fillField(locator, value);
        },

        switchingToFrame(iFrame) {
            I.switchTo(iFrame);
            helperBase.waitForElement(forgetPasswordLocator.verifyEmailLocator);
        },

        switchingToFrameToResetPassword(iFrame) {
            I.switchTo(iFrame);
            helperBase.waitForElement(forgetPasswordLocator.resetPasswordLinkInMail);
        },

        switchNext() {
            I.switchToNextTab();
        }
    },
};
