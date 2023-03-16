import { test, expect } from "@playwright/test";
import { FormPage } from "../pages/forms";
import { LoginPage } from "../pages/login";

const email = "killuasociety@yopmail.com";
const password = "Hello@123";
const formName = "Form Newest";
const sameFormName = "NewestForm";

test.beforeEach(async ({ page }) => {
  await page.goto("https://dev.keela.co");
  await page.pause();
});

test("Test Form Creation Page", async ({ page }) => {
  const Login = new LoginPage(page);
  const Form = new FormPage(page);
  await Login.loginToKeela(email, password);
  await Form.formCreation();
  await Form.fillFormName(formName);
  await expect(page.getByText("Form Details")).toHaveCount(1);
});

test("Test Form Creation Page with Same Name", async ({ page }) => {
  const Login = new LoginPage(page);
  const Form = new FormPage(page);
  await Login.loginToKeela(email, password);
  await Form.formCreation();
  await Form.fillFormName(sameFormName);
  await expect(page.getByText("Form Name already exists")).toHaveCount(1);
});
