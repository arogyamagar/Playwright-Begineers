import { test, expect } from "@playwright/test";

test("login with valid crendetial", async ({ page }) => {
  await page.goto("https://dev.keela.co/");
  //   await page.pause();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety@yopmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Hello@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Home" })).toHaveCount(1);
});

test("login with invalid credential (valid email but invalid password)", async ({
  page,
}) => {
  await page.goto("https://dev.keela.co/");
  //   await page.pause();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety@yopmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Hello");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(
    page.getByText("Login failed. Invalid email or password")
  ).toHaveCount(1);
});

test("login with invalid credential (invalid email but valid password)", async ({
  page,
}) => {
  await page.goto("https://dev.keela.co/");
  //   await page.pause();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Hello@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(
    page.getByText("Login failed. Invalid email or password")
  ).toHaveCount(1);
});

test("login with invalid email address", async ({ page }) => {
  await page.goto("https://dev.keela.co/");
  //   await page.pause();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("killuasociety");
  await page.getByLabel("Password").click();
  await expect(page.getByText("Must be a valid email address.")).toHaveCount(1);
});
