import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testing_khaimmo2.emerge-test.com/login.html#/');
  await page.getByRole('textbox', { name: 'Email Address or User Name' }).fill('admin');
  const password = page.getByPlaceholder('Credentials');
  await password.fill('123123');
  await expect(password).toHaveValue('123123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('a').filter({ hasText: 'Products' }).first().click();
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'Product Actions' }).click();
  await page.getByRole('link', { name: 'Add new product' }).click();
  await page.getByRole('textbox', { name: 'Your unique item name (eg:' }).click();
  await page.getByRole('textbox', { name: 'Your unique item name (eg:' }).fill('Automation 111');
  await page.getByPlaceholder('Initial stock on hand').click();
  await page.getByPlaceholder('Initial stock on hand').fill('5');
  await page.getByPlaceholder('Initial Cost Price (1 Qty)').click();
  await page.getByPlaceholder('Initial Cost Price (1 Qty)').fill('10');
  await page.getByPlaceholder('0.00').nth(2).click();
  await page.getByPlaceholder('0.00').nth(2).fill('10');
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('PageUp');
}
  await page.locator('#saveDocument').click();
});