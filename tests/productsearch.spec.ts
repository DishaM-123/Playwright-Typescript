
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
});

test('Verify search results contain the searched keyword', async ({ page }) => {
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('blue');
  await page.locator('#submit_search').click();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  
});

test('Verify search with numeric values', async ({ page }) => {
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('87899');
  await page.locator('#submit_search').click();
});

test('Verify search with special charcaters', async ({ page }) => {
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('%^%^');
  await page.locator('#submit_search').click();
});

test('Verify search with blank value', async ({ page }) => {
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('');
  await page.locator('#submit_search').click();
});

