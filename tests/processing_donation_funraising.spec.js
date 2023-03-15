import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev.keela.co/");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety@yopmail.com");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Password").fill("Hello@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: " Dashboard" }).click();
  await page.getByRole("link", { name: " Fundraising" }).click();
  await page.getByRole("link", { name: "Transactions" }).click();
  await page.getByRole("button", { name: "Create New " }).click();
  await page
    .locator("div")
    .filter({ hasText: "Donation Other Revenue" })
    .locator("a")
    .first()
    .click();
  await page.getByPlaceholder("Start typing to search...").click();
  await page.locator(".highlight > a").click();
  await page
    .getByRole("combobox", { name: "Gift Type*" })
    .selectOption("In-kind: Goods or Services");
  await page.getByLabel("Estimated Value of Non-cash Contribution").click();
  await page
    .getByLabel("Estimated Value of Non-cash Contribution")
    .fill("1000");
  await page.getByLabel("Description of Non-cash Contribution").click();
  await page
    .getByLabel("Description of Non-cash Contribution")
    .fill("This is the desc of non-cash-contribution");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByText("Campaign × Loading...").click();
  await page.getByText("Child Fund Raise").click();
  await page.getByPlaceholder("Start typing to search...").first().click();
  await page.getByText("Village").click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByText("Generate just receipt for print and mail").click();
  await page.getByRole("button", { name: "Save" }).click();
});
