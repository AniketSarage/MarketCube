module.exports = {
  forgetPasswordLocator : {
    agreeTermsAndConditions : '(//span[contains(@class,"Polaris-Checkbox")])[1]',
    registerLocator : '//button[@type="button"][contains(.,"Register here")]',
    mailinatorEmailBox : '//input[contains(@placeholder,"Enter Inbox")]',
    buttonToFinalizeMail : '//button[@id="go_inbox"]',
    forgottenPasswordLocator : '//span[@class="Polaris-Button__Text"][contains(.,"Forgotten Password")]',
    registerLocator : '//button[@type="button"][contains(.,"Register here")]',
    proceedAsVendorLocator : '//span[@class="Polaris-Button__Text"][contains(.,"Proceed as Vendor")]',
    registrationPageLocators : {
      email : '//input[contains(@placeholder,"Email Address")]',
      password: '//input[@placeholder="Password"]',
      confirmPassword: '//input[contains(@placeholder,"Enter Confirm Password")]',
    },

},
};