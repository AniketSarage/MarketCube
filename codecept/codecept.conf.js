exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize       : "maximize",
      waitForNavigation: "networkidle0",
      waitForTimeout   : 10000,
    },
  },
  include: {
    I: './customStep.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './feature/*.feature',
    steps: ['./step/public/forgetPasswordStep.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  name: 'codecept'
}