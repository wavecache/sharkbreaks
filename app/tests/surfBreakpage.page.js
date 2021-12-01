import { Selector } from 'testcafe';

class SurfBreakPage {
  constructor() {
    this.pageId = '#surfBreakPage-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const surfBreakPage = new SurfBreakPage;
