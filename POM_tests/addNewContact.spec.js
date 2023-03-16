import { test, expect } from "@playwright/test";
import { ContactPage } from "../pages/contacts";

const email = "killuasociety@yopmail.com";
const password = "Hello@123";
const fname = "killuasociety";
const blank = "";

test.beforeEach(async ({ page }) => {
  await page.goto("https://dev.keela.co");
  await page.pause();
});

// test("Creating contact filling out mandatory fields", async ({ page }) => {
//   const createContact = new ContactPage(page);
//   await createContact.createaNewContact(email, password, fname);
//   await expect(page).toHaveURL(/profile/);
// });

test("Creating contact not filling out mandatory fields", async ({ page }) => {
  const createContact = new ContactPage(page);
  await createContact.createaNewContact(email, password, blank);
  await expect(
    page.getByText("Contact must contain at least one of the required fields")
  ).toHaveCount(1);
});
