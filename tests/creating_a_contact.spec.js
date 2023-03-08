const { test, expect } = require("@playwright/test");
test("test", async ({ page }) => {
  await page.goto("https://dev.keela.co/");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety@yopmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Hello@1223");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: " Contacts" }).click();
  await page.getByRole("button", { name: "Add Contact" }).click();
  await page.getByLabel("First Name").fill("Hari Kancha");
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("heading", { name: "General Updates" }).click();
});
