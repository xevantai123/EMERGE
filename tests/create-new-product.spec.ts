import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testing_khaimmo2.ap.emergeapp.net/index.html#/');
  await page.locator('a').filter({ hasText: 'Products' }).first().click();
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'Product Actions' }).click();
  await page.getByRole('link', { name: 'Add new product' }).click();
  await page.getByRole('textbox', { name: 'Your unique item name (eg:' }).click();
  await page.getByRole('textbox', { name: 'Your unique item name (eg:' }).fill('Test auto');
  await page.locator('#saveDocument').click();
  await page.getByRole('button', { name: 'No, just save without initial' }).click();
});