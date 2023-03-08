const { test, expect } = require("@playwright/test");

test("My first test", async ({ page }) => {
  await page.goto(
    "https://give-dev.keela.co/test-form-for-campaign-progress-bar-sa-1"
  );
  await expect(page).toHaveTitle("Killua Society");
});
