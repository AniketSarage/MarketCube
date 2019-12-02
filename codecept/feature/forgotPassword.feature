Feature: User should be able to reset password by Forgotten password facility

  As a registered user
  I want to be able to reset password

Background: user opens the app and go to login page
  Given user is on login page  

Scenario: To register the user for using forgotten password feature
  Given user is on registration page
  When user fills all the credentials and clicks on register
  Then vendor should be registered
  When user is on mailinator web page
  When user enters the email to access email confirmation mail from the inbox 
  Then user should click on verify email
  Given user is on login page
  When user is on forgotten password page
  When user enters registered email
  When user clicks on reset password
  Then mail should be sent successfully
  When user is on mailinator webpage
  When user enters into reset password email
  When user resets password
  Then password reset done message should be displayed



