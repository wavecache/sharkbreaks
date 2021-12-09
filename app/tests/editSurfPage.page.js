import { Selector } from 'testcafe';

class EditSurfBreakPage {
  constructor() {
    this.pageId = '#editSurfBreaks-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async validBreakEdit(testController) {
    await testController.typeText('#edit-break-name', 'Some random text to test');
    await testController.typeText('#edit-break-image', 'Some random text to test');
    await testController.typeText('#edit-break-summary', 'Some random text to test');
    await testController.typeText('#edit-break-description', 'Some random text to test');
    await testController.typeText('#edit-break-address', 'Some random text to test');
    await testController.typeText('#edit-break-x-pos', '100');
    await testController.typeText('#edit-break-y-pos', '100');
    await testController.click('#edit-break-submit');
  }
}

export const editSurfBreakPage = new EditSurfBreakPage()