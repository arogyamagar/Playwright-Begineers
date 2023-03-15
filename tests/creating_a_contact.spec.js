const { test, expect } = require("@playwright/test");
// test("creating contact with mandatory fields", async ({ page }) => {
//   await page.goto("https://dev.keela.co/");
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Email").fill("killuasociety@yopmail.com");
//   await page.getByLabel("Password").click();
//   await page.getByLabel("Password").fill("Hello@123");
//   await page.getByRole("button", { name: "Log in" }).click();
//   await page.getByRole("link", { name: " Contacts" }).click();
//   await page.getByRole("button", { name: "Add Contact" }).click();
//   await page.getByLabel("First Name").fill("Hari Kancha");
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByRole("heading", { name: "General Updates" }).click();
// });

test("creating contact without mandatory fields", async ({ page }) => {
  await page.goto("https://dev.keela.co/");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety@yopmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Hello@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: " Contacts" }).click();
  await page.getByRole("button", { name: "Add Contact" }).click();
  await page.getByRole("button", { name: "Save" }).click();
  await page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain(
      "Contact must contain at least one of the required fields"
    );
    await dialog.dismiss();
  });
});
