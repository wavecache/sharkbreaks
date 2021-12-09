import { Selector } from 'testcafe';

class AddSurfBreakPage {
  constructor() {
    this.pageId = '#addSurfBreaks-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async validBreakAdded(testController) {
    await testController.typeText('#add-break-name', 'Some random text to test');
    await testController.typeText('#add-break-image', 'Some random text to test');
    await testController.typeText('#add-break-summary', 'Some random text to test');
    await testController.typeText('#add-break-description', 'Some random text to test');
    await testController.typeText('#add-break-address', 'Some random text to test');
    await testController.typeText('#add-break-name', 'Some random text to test');
    await testController.typeText('#add-break-x-pos', '100');
    await testController.typeText('#add-break-y-pos', '100');
    await testController.click('#add-break-submit');
  }
}

export const addSurfBreakPage = new AddSurfBreakPage();