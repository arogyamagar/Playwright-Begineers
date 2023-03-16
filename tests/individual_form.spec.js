import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev.keela.co/");
  await page.getByLabel("Email").fill("killuasociety@yopmail.com");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Password").fill("Hello@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: " Forms" }).click();
  await page.getByRole("button", { name: "Create New " }).click();
  await page.getByText("New Form Builder").click();
  await page
    .getByRole("link", {
      name: " Donation Form donation-form.svg Allow contacts to donate to your organization online.",
    })
    .click();
  await page.getByRole("button", { name: "Next" }).click();
  await page
    .getByRole("link", {
      name: "Stand-alone stand-alone-format Create a form on a standalone page that you can share with a link.",
    })
    .click();
  await page.getByRole("button", { name: "Next" }).click();
  await page
    .getByRole("link", { name: " donation-forms/multi-page-layout-1.svg" })
    .click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByLabel("Form Name").fill("Hello");
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByLabel("Form Name").click();
  await page.getByLabel("Form Name").fill("Hello123");
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByText("Form Details").click();
});
