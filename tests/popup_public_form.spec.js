import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic"
  );
  await page.locator("pre").filter({ hasText: "<!DOCTYPE html>" }).click();
  await page.locator(".CodeMirror-scroll").click();
  await page.getByRole("textbox").fill("Hello");
  //   await page.getByRole("textbox").press("Enter");
  //   await page.getByRole("button", { name: "Run ❯" }).click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .getByRole("button", { name: "Donate" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "One-time" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "$100" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "Donate" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "Keep my one-time $100" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("First Name")
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("First Name")
  //     .fill("rame");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Last Name")
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Last Name")
  //     .fill("bhai");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Email Address")
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Email Address")
  //     .fill("ramebhai@gmail.com");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "Continue" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Address Line 1")
  //     .fill("Pulchowk");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("State/Province")
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("State/Province")
  //     .fill("Bagmati");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("City")
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("City")
  //     .fill("Lalitpur");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .locator("#BtPaMuddvnYrwAWrW-country")
  //     .selectOption("Nepal");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Postal/Zip")
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByPlaceholder("Postal/Zip")
  //     .fill("44600");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "Continue" })
  //     .click();
  //   await page
  //     .frame({
  //       name: "__privateStripeFrame3616",
  //     })
  //     .getByPlaceholder("Card number")
  //     .fill("4242 4242 4242 4242");
  //   await page
  //     .frame({
  //       name: "__privateStripeFrame3616",
  //     })
  //     .getByPlaceholder("MM / YY")
  //     .fill("04 / 24");
  //   await page
  //     .frame({
  //       name: "__privateStripeFrame3616",
  //     })
  //     .getByPlaceholder("CVC")
  //     .fill("242");
  //   await page
  //     .frame({
  //       name: "__privateStripeFrame3616",
  //     })
  //     .getByPlaceholder("ZIP")
  //     .fill("42424");
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByRole("button", { name: "Donate" })
  //     .click();
  //   await page
  //     .frameLocator('iframe[name="iframeResult"]')
  //     .frameLocator("iframe")
  //     .getByText("Donation Completed")
  //     .click();
});
