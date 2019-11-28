Feature: User should be able to reset password by Forgotten password facility

  As a registered user
  I want to be able to reset password

Background: user opens the app and go to login page
  Given user is on login page

Scenario: To generate random mail
  Given user is on mailinator webpage
  When user enters text to generate random mail and submit with Go!

Scenario: To register the user for using forgotten password feature
  Given user is on registration page
  When check after clicking forgotten password it should redirect to respective page
  Then user should clicks on register
  And user needs to select his role as vendor
  When user fills all the required credentials
  And user needs to accept terms and conditions and submit with register button

Scenario: To check weather forgotten password working
  When user checks forgotten password option existance
  When user moves forward to forgotten password
  Then user enters the email and clicks on request for reset password request

Scenario: Redirect to mail inbox check if the reset password mail is present
  Given user is on mailinator website inbox of current mail
  When user checks for the subject line of the mail of resetting password
  And user enters the particular mail

Scenario: To proceed for resetting password clicks for the reset password link in the mail
  When user clicks on the link
  And user redirect to reset password page
  And user fills the credentials and submit the form
  Then password reset successful message should display 

Scenario: To check if there is mail of successful password reset and if it redirects to the dashboard or not
  Given user is on the mailinator
  When mail of particular subject arrived
  Then user should enter into it
  And there must be the options to go to marketcube and quit
  When user clicks on go to marketcube
  Then user should be redirected to dashboard
  When user clicks on quit
  Then user should left the login precess

Scenario: To check the entered email is registered  email or not
  When user entered the unregistered email and submit
  Then error message should be displayed

Scenario: To check if the link is valid only once
  Given user is in the email inbox of reset password mailinator inbox
  When user goes to reset password link and enters
  And user go to the reset link for the again
  Then user should shown with page not found 
