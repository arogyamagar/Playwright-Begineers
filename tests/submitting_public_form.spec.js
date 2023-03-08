import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://give-dev.keela.co/test-form-for-campaign-progress-bar-sa-1"
  );
  await page.getByRole("button", { name: "$50" }).click();
  await page.getByPlaceholder("Dedication").click();
  await page.getByPlaceholder("Dedication").fill("This is Dedication");
  await page.getByRole("button", { name: "Donate" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Ram");
  await page.getByPlaceholder("First Name").press("Tab");
  await page.getByPlaceholder("Last Name").fill("Golu");
  await page.getByPlaceholder("Email Address").click();
  await page.getByPlaceholder("Email Address").fill("ramgolu@yopmail.com");
  await page.getByPlaceholder("Title").click();
  await page.getByText("Mrs.").click();
  await page.getByPlaceholder("Middle Name").click();
  await page.getByPlaceholder("Middle Name").fill("Bahadur");
  await page.getByPlaceholder("Suffix").click();
  await page.getByText("Sr.").click();
  await page.getByPlaceholder("Preferred Name").click();
  await page.getByPlaceholder("Preferred Name").fill("Rame");
  await page.getByPlaceholder("Gender").click();
  await page.getByText("Male", { exact: true }).click();
  await page.getByRole("combobox", { name: "Birth Date" }).selectOption("1");
  await page
    .locator('select[name="kyT9a9kGRHARtJY66-month"]')
    .selectOption("2");
  await page
    .locator('select[name="kyT9a9kGRHARtJY66-year"]')
    .selectOption("1978");
  await page.getByPlaceholder("Organization Name").click();
  await page.getByPlaceholder("Organization Name").fill("I am Org NAme");
  await page.getByPlaceholder("Organization Position").click();
  await page
    .getByPlaceholder("Organization Position")
    .fill("I am orf position");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByPlaceholder("Address Line 1").click();
  await page.getByPlaceholder("Address Line 1").fill("Pulchowk");
  await page
    .locator("div")
    .filter({
      hasText:
        "Back Address Address Line 1 * Address Line 2 Country * Afghanistan Albania Alger",
    })
    .nth(1)
    .click();
  await page.getByPlaceholder("Street").click();
  await page.getByPlaceholder("Street").fill("Lalitpur");
  await page.locator("#CTQgpKDDuFWsqmsLo-country").selectOption("Nepal");
  await page.getByPlaceholder("City").click();
  await page.getByPlaceholder("City").fill("Pulchowk");
  await page.getByPlaceholder("State/Province").click();
  await page.getByPlaceholder("State/Province").fill("3");
  await page.getByPlaceholder("Postal/Zip").click();
  await page.getByPlaceholder("Postal/Zip").fill("555555");
  await page.getByRole("button", { name: "Continue" }).click();
  await page
    .frameLocator('iframe[name="__privateStripeFrame3696"]')
    .getByPlaceholder("Card number")
    .fill("4242 4242 4242 4242");
  await page
    .frameLocator('iframe[name="__privateStripeFrame3696"]')
    .getByPlaceholder("MM / YY")
    .fill("04 / 24");
  await page
    .frameLocator('iframe[name="__privateStripeFrame3696"]')
    .getByPlaceholder("CVC")
    .fill("242");
  await page
    .frameLocator('iframe[name="__privateStripeFrame3696"]')
    .getByPlaceholder("ZIP")
    .fill("555555");
  await page.getByRole("button", { name: "Donate" }).click();
  await page.getByText("Donation Completed").click();
  await expect(page).toHave("Killua Society");
});
