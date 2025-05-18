import { test, expect } from '@playwright/test';

test('Submit Practice Form', async ({ page }) => {
  await page.goto('/automation-practice-form');
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#userEmail', 'john.doe@example.com');
  await page.click('label[for="gender-radio-1"]');
  await page.fill('#userNumber', '1234567890');
  await page.click('#submit');
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
});