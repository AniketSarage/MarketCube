module.exports = {
  forgetPasswordLocator: {
    agreeTermsAndConditions: '(//span[contains(@class,"Polaris-Checkbox")])[1]',
    registerHereLocator: "#registerLink",
    mailinatorEmailBox: '//input[@placeholder="Enter Inbox"]',
    buttonToFinalizeMail: '//button[@value="go_inbox"]',
    forgottenPasswordLocator: '//span[@class="Polaris-Button__Text"][contains(.,"Forgotten Password")]',
    proceedAsVendorLocator: '//span[@class="Polaris-Button__Text"][contains(.,"Proceed as Vendor")]',
    registrationPageLocators: {
      email: "#email",
      password: "#password",
      confirmPassword: "#confirmPassword",
    },
    policyAndTerms: '//label//span[@class="Polaris-Checkbox"]',
    registerLocator: '(//span[contains(.,"Register")])[3]',
    confirmationMailInboxLocator: '(//td[contains(.,"Complete your MarketCube registration")])[1]',
    verifyEmailLocator: '//a[contains(.,"Verify Email")]',
    emailAddressToResetLocator: '//input[@placeholder="Email Address"]',
    resetPasswordButtonLocator: '(//span[contains(.,"Reset Password")])[2]',
    resetPasswordMailInbox: '//td[contains(.,"Reset your MarketCube password")]',
    resetPasswordLinkInMail:'(//a[contains(@target,"other")])[2]',
    newPasswordLocator: '#newPassword',
    confirmNewPasswordLocator: '#confirmNewPassword',
  },
};
