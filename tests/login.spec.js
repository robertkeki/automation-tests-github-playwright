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
  await page.locator("//body/div[3]/main[1]/div[1]/div[4]/form[1]/div[1]/input[12]").click
 
});
