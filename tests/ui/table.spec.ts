import { test, expect } from '@playwright/test';

test('CRUD Operations on Web Tables', async ({ page }) => {
  await page.goto('/webtables');
  
  await page.click('#addNewRecordButton');
  await page.fill('#firstName', 'Jane');
  await page.fill('#lastName', 'Smith');
  await page.fill('#userEmail', 'jane.smith@example.com');
  await page.fill('#age', '28');
  await page.fill('#salary', '70000');
  await page.fill('#department', 'HR');
  await page.click('#submit');

  await expect(page.locator('.rt-tbody')).toContainText('Jane');

  await page.click('text=Edit');
  await page.fill('#department', 'Finance');
  await page.click('#submit');

  await expect(page.locator('.rt-tbody')).toContainText('Finance');

  await page.click('text=Delete');
  await expect(page.locator('.rt-tbody')).not.toContainText('Jane');
});