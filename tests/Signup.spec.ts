import { test, expect } from '@playwright/test';
import { signupData } from '../test-data/signupdata';

test('Signup with Faker data', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.getByRole('textbox', { name: 'Name' }).fill(signupData.firstName);

  await page.locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill(signupData.email);

  await page.getByRole('button', { name: 'Signup' }).click();

  await page.getByRole('radio', { name: 'Mrs.' }).check();

  await page.getByRole('textbox', { name: 'Password *' }).fill(signupData.password);

  await page.locator('#days').selectOption(signupData.day);
  await page.locator('#months').selectOption(signupData.month);
  await page.locator('#years').selectOption(signupData.year);

  await page.getByRole('textbox', { name: 'First name *' }).fill(signupData.firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(signupData.lastName);

  await page.getByRole('textbox', { name: 'Company', exact: true }).fill(signupData.company);

  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(signupData.address1);

  await page.getByRole('textbox', { name: 'Address 2' }).fill(signupData.address2);

  await page.getByRole('textbox', { name: 'State *' }).fill(signupData.state);

  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(signupData.city);

  await page.locator('#zipcode').fill(signupData.zipcode);

  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill(signupData.phone);

  await page.getByRole('button', { name: 'Create Account' }).click();

  await page.getByRole('link', { name: 'Continue' }).click();

});