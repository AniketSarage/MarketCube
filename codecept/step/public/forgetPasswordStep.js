const env = require("../../helper/env");
const { forgetPasswordPage } = require("../../page/forgetPasswordPage");
const { forgetPasswordLocator } = require("../../locator/forgetPasswordLocator");
const { forgotPasswordData } = require("../../data/public/forgotPasswordData");
const { registrationPageLocators } = forgetPasswordLocator;
const { email, password, confirmPassword } = registrationPageLocators;
const fillCredentials = [
  {
    data: forgotPasswordData.email,
    locator: email,
  },
  {
    data: forgotPasswordData.password,
    locator: password,
  },
  {
    data: forgotPasswordData.password,
    locator: confirmPassword,
  },
];

Given("user is on login page", () => {
  console.log("email", email, "pass", password, "cpassword", confirmPassword);
  forgetPasswordPage.openUrl(env.test.web.marketCubeLogin);
});

Given("user is on registration page", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.registerHereLocator);
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.proceedAsVendorLocator);
});

When("user fills all the credentials and clicks on register", () => {
  forgetPasswordPage.fillCredentialsForRegistration(fillCredentials);
});

Then("vendor should be registered", () => {
  
});

When("user is on mailinator web page", () => {
  forgetPasswordPage.openUrl(env.test.web.mailinatorHome);
});

When("user enters the email to access email confirmation mail from the inbox", () => {
  forgetPasswordPage.fillTheField(forgetPasswordLocator.mailinatorEmailBox, forgotPasswordData.randomUser);
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.buttonToFinalizeMail);
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.confirmationMailInboxLocator);
});

Then("user should click on verify email", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.verifyEmailLocator);
});

When("user is on forgotten password page", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.forgottenPasswordLocator);
});

When("user enters registered email", () => {
  forgetPasswordPage.fillTheField(forgetPasswordLocator.emailAddressToResetLocator);
});

When("user clicks on reset password", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.resetPasswordButtonLocator);
});

Then("mail should be sent successfully", () => {

});

When("user enters into reset password email", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.resetPasswordMailInbox);
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.resetPasswordLinkInMail);
});

When("user resets password", () => {
  forgetPasswordPage.fillTheField(forgetPasswordLocator.newPasswordLocator, forgotPasswordData.newPassword);
  forgetPasswordPage.fillTheField(forgetPasswordLocator.confirmNewPasswordLocator, forgotPasswordData.newPassword);
});

Then("password reset done message should be displayed", () => {

});






// When("user enters text to generate random mail and submit with Go!", () => {
//   forgetPasswordPage.generateEmailOnMailinator(
//     forgetPasswordLocator.mailinatorEmailBox,
//     forgotPasswordData.email,
//     forgetPasswordLocator.buttonToFinalizeMail
//   );
// });

// Given("user is on mailinator webpage", () => {
//   forgetPasswordPage.openUrl(env.test.web.mailinatorHome);
// });

// When("check after clicking forgotten password it should redirect to respective page", () => {
//   forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.forgottenPasswordLocator);
// });

// Then("user should clicks on register", () => {
//   forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.registerLocator);
// });

// Then("user needs to select his role as vendor", () => {
//   forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.proceedAsVendorLocator);
// });

// When("user fills all the required credentials", () => {
//   forgetPasswordPage.fillCredentialsForRegistration(fillCredentials);
// });

// When("user needs to accept terms and conditions and submit with register button", () => {});
