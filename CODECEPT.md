Codecept startup :

Installation steps :
Step 1 :
Install npm (node js):
https://nodejs.org/en/download/

Step 2 :
Install CodeceptJS globally
npm install -g codeceptjs

Step 3 :(If you want to use selenium webdriver helper)
Install webdriver
https://codecept.io/quickstart#using-selenium-webdriver
npm install -g codeceptjs webdriverio

Step 4 : (If you are using selenium webdriver helper)
Start server
[sudo] npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start

Step 5 : (Create tests)
Craete a folder which will be your project folder
Go to command prompt and the folder path
codeceptjs init
System Prompts:
? What helpers do you want to use?
· ❯◉ WebDriver
· ◯ Protractor
· ◯ Puppeteer
· ◯ Appium
· ◯ Nightmare
· ◯ FileSystem

Step 6 :  
 . Then follow the sequence of steps in the command prompt

Step 7 :
Now to get all the API functions available in the CodeceptJS run the following command
codeceptjs def
Note: You need to copy "/// <reference path="./steps.d.ts" />" to each step file and page
objects file to get the intellisense command completion

Step 8 :
To generate feature file
codeceptjs gherkin:init
It will add gherkin section to the current config. It will also prepare directories for features and
step definition. And it will create the first feature file for you.

Step 9 :
To generate the step definitions
codeceptjs gherkin:snippets
