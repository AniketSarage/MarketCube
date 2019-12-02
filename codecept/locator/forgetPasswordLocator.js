module.exports = {
  forgetPasswordLocator: {
    agreeTermsAndConditions: '(//span[contains(@class,"Polaris-Checkbox")])[1]',
    registerHereLocator: "#registerLink",
    mailinatorEmailBox: '//input[@placeholder="Enter Inbox"]',
    buttonToFinalizeMail: '//button[@value="go_inbox"]',
    forgottenPasswordLocator: '(//span[contains(.,"Forgotten Password")])[2]',
    proceedAsVendorLocator: '//span[@class="Polaris-Button__Text"][contains(.,"Proceed as Vendor")]',
    registrationPageLocators: {
      email: "#email",
      password: "#password",
      confirmPassword: "#confirmPassword",
    },
    policyAndTerms: '//label//span[@class="Polaris-Checkbox"]',
    registerLocator: '(//span[contains(.,"Register")])[3]',
    confirmationMailInboxLocator: '//a[contains(.,"Complete your MarketCube registration")]',
    verifyEmailLocator: '//a[contains(.,"Verify Email")]',
    emailAddressToResetLocator: '//input[@id="email"]',
    resetPasswordButtonLocator: '//span[@class="Polaris-Button__Text"][contains(.,"Reset Password")]',
    resetPasswordMailInbox: '//a[contains(.,"Reset your MarketCube password")]',
    resetPasswordLinkInMail:'(//a[contains(@target,"other")])[2]',
    newPasswordLocator: '#newPassword',
    confirmNewPasswordLocator: '#confirmNewPassword',
    iFrameInMailinator: '#msg_body',
  },
};
