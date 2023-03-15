import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

//Declearing constant for every test.
const email = "killuasociety@yopmail.com";
const password = "Hello@123";
const incorrect_email = "killsociety@yopmail.com";
const invalid_email = "killuasociety";
const incorrect_password = "Hell";

test("Test Login with valid credential", async ({ page }) => {
  const Login = new LoginPage(page); //Creating a instance of a class

  await page.goto("https://dev.keela.co/");
  await Login.enterEmailAddress(email);
  await Login.enterPassword(password);
  await Login.clickLogInBtn();
  await expect(page.getByText("Let's create impact today.")).toHaveCount(1);
});

test("Test login with invalid credential (valid email but invalid password)", async ({
  page,
}) => {
  const Login = new LoginPage(page);

  await page.goto("https://dev.keela.co/");
  await Login.enterEmailAddress(email);
  await Login.enterPassword(incorrect_password);
  await Login.clickLogInBtn();
  await expect(
    page.getByText("Login failed. Invalid email or password")
  ).toHaveCount(1);
});

test("Test login with invalid credential (invalid email but valid password)", async ({
  page,
}) => {
  const Login = new LoginPage(page);

  await page.goto("https://dev.keela.co/");
  await Login.enterEmailAddress(incorrect_email);
  await Login.enterPassword(password);
  await Login.clickLogInBtn();
  await expect(
    page.getByText("Login failed. Invalid email or password")
  ).toHaveCount(1);
});

test("Test login with invalid email address", async ({ page }) => {
  const Login = new LoginPage(page);

  await page.goto("https://dev.keela.co/");
  await Login.enterEmailAddress(invalid_email);
  await page.getByLabel("Password").click();
  await expect(page.getByText("Must be a valid email address.")).toHaveCount(1);
});
