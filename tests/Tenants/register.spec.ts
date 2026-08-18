import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://emergeapp.net/register/');
  await page.getByRole('textbox', { name: 'Valid Company Name' }).click();
  await page.getByRole('textbox', { name: 'Valid Company Name' }).fill('testjack-0818-17');
  await page.getByRole('textbox', { name: 'Business Email' }).click();
  await page.getByRole('textbox', { name: 'Business Email' }).fill('testjack.0818.17@test.com');
  await page.getByRole('button', { name: 'CREATE FREE ACCOUNT' }).click();
});