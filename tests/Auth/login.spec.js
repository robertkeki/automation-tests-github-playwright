// @ts-login
const { test, expect } = require('@playwright/test');

test('Open Github Login', async ({ page }) => {
  await page.goto('https://github.com/login/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Sign in to GitHub · GitHub");

  // create a locator
  await page.locator('#login_field').fill("robertkeki@yahoo.ro");
  await page.locator('#password').fill('1910825055111Bun');

  // Click the Username field.
  await page.click('input[value="Sign in"]')

  await expect(page).toHaveTitle("GitHub");
  await page.goto('https://github.com/');

});
