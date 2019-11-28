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
    data: forgetPasswordLocator.password,
    locator: password,
  },
  {
    data: forgetPasswordLocator.password,
    locator: confirmPassword,
  },
];

Given("user is on login page", () => {
  forgetPasswordPage.openUrl(env.test.web.marketCubeLogin);
});

Given("user is on mailinator webpage", () => {
  forgetPasswordPage.openUrl(env.test.web.mailinatorHome);
});

When("user enters text to generate random mail and submit with Go!", () => {
  forgetPasswordPage.generateEmailOnMailinator(
    forgetPasswordLocator.mailinatorEmailBox,
    forgotPasswordData.email,
    forgetPasswordLocator.buttonToFinalizeMail
  );
});

Given("user is on registration page", () => {
  forgetPasswordPage.openUrl(env.test.web.marketCubeLogin);
});

When("check after clicking forgotten password it should redirect to respective page", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.forgottenPasswordLocator);
});

Then("user should clicks on register", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.registerLocator);
});

Then("user needs to select his role as vendor", () => {
  forgetPasswordPage.clickAsPerLocator(forgetPasswordLocator.proceedAsVendorLocator);
});

When("user fills all the required credentials", () => {
  forgetPasswordPage.fillCredentialsForRegistration(fillCredentials);
});

// When("user needs to accept terms and conditions and submit with register button", () => {});

// Given("user is on login page", () => {});

// When("user checks forgotten password option existence", () => {});

// When("user moves forward to forgotten password", () => {});

// Then("user enters the email and clicks on request for reset password request", () => {});

// Given("user is on mailinator website inbox of current mail", () => {});

// When("user checks for the subject line of the mail of resetting password", () => {});

// When("user enters the particular mail", () => {});

// When("user clicks on the link", () => {});

// When("user redirect to reset password page", () => {});

// When("user fills the credentials and submit the form", () => {});

// Then("password reset successful message should display", () => {});

// Given("user is on the mailinator", () => {});

// When("mail of particular subject arrived", () => {});

// Then("user should enter into it", () => {});

// Then("there must be the options to go to marketcube and quit", () => {});

// When("user clicks on go to marketcube", () => {});

// Then("user should be redirected to dashboard", () => {});

// When("user clicks on quit", () => {});

// Then("user should left the login precess", () => {});

// When("user entered the unregistered email and submit", () => {});

// Then("error message should be displayed", () => {});

// Given("user is in the email inbox of reset password mailinator inbox", () => {});

// When("user goes to reset password link and enters", () => {});

// When("user go to the reset link for the again", () => {});

// Then("user should shown with page not found", () => {});
