import { Selector } from 'testcafe';
import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { surfBreaksPage } from './surBreaks.page';
import { surfBreakPage } from './surfBreakpage.page';
import { addSurfBreakPage } from './addSurfBreak.page';
import { editSurfBreakPage } from './editSurfPage.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('SurfBreaks page shows up and has two cards', async (testController) => {
  await landingPage.isDisplayed(testController);
  await testController.click('#surfBreaks-page-navBar');
  await surfBreaksPage.isDisplayed(testController);
  await surfBreaksPage.hasDefaultBreaks(testController);
});

test('SurfBreakPage page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
  await testController.click('#surfBreaks-page-navBar');
  await surfBreaksPage.isDisplayed(testController);
  await testController.click(Selector('.ui .card .header').withText('PUA’ENA POINT'));
  await surfBreakPage.isDisplayed(testController);
});

test('Adding a surf break with valid inputs', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.click('#surfBreaks-page-navBar');
  await testController.click(Selector('.ui .button').withText('Add Your Favourite Break!'));
  await addSurfBreakPage.isDisplayed(testController);
  await addSurfBreakPage.validBreakAdded(testController);
  await testController.click('#surfBreaks-page-navBar');
  await testController.click('#surfBreaks-page-navBar');
  await surfBreaksPage.isDisplayed(testController);
  await surfBreaksPage.hasDefaultBreaksAfterAdding(testController);
});

test('Editing a surf break with valid inputs', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.click('#surfBreaks-page-navBar');
  await testController.click(Selector('.ui .card .content').withText('Edit this Surf Break'));
  await editSurfBreakPage.isDisplayed(testController);
  await editSurfBreakPage.validBreakEdit(testController);
  await testController.click('#surfBreaks-page-navBar');
  await testController.click('#surfBreaks-page-navBar');
  await surfBreaksPage.isDisplayed(testController);
  await surfBreaksPage.hasDefaultBreaksAfterAdding(testController);
});
