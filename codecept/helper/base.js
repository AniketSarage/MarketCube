/* eslint-disable class-methods-use-this */
// const faker = require("faker");
const I = require("../customStep");

class BaseHelper {
  wait(time = 5) {
    I.wait(time);
  }

  waitForElement(element, time = 5) {
    I.waitForElement(element, time);
  }

  addStringLocator(locator) {
    return `'${locator}'`;
  }

  // getRandomEmail() {
  //   return `${faker.internet.userName()}@mailinator.com`;
  // }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

module.exports = new BaseHelper();
