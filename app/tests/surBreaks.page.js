import { Selector } from 'testcafe';

class SurfBreaksPage {
  constructor() {
    this.pageId = '#surfBreaks-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasDefaultBreaks(testController) {
    const cardCount = Selector('.ui .card').count;
    await testController.expect(cardCount).gte(2);
  }

  async hasDefaultBreaksAfterAdding(testController) {
    const cardCount = Selector('.ui .card').count;
    await testController.expect(cardCount).gte(3);
  }
}

export const surfBreaksPage = new SurfBreaksPage();
