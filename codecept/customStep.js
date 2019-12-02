// in this file you can append custom step methods to 'I' object

const customActor = () => {
  // eslint-disable-next-line no-undef
  const I = actor();
  I.customClearField = async function customClearField(locator) {
    this.click(locator);
    this.pressKey(["Control", "a"]);
    this.pressKey("Delete");
  };

  I.customPaste = async function customPaste() {
    // locator
    this.pressKey(["Control", "v"]);
  };

  I.customCopy = async function customCopy(locator) {
    this.click(locator);
    this.pressKey(["Control", "a"]);
    this.pressKey(["Control", "c"]);
  };

  I.customAttachFile = async function customAttachFile(locator, path) {
    this.attachFile(locator, path);
  };

  I.customEnter = async function customEnter() {
    this.pressKey("Enter");
  };

  return I;
};

module.exports = customActor();
