import { chromium, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const base = process.env.BASE_URL || "http://localhost:3000";
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL || "chrome",
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await mkdir("test-results/screenshots", { recursive: true });
const routes = [
  "/",
  "/about",
  "/teachers",
  "/students",
  "/contact",
  "/login",
  "/register",
];
try {
  for (const viewport of [
    { width: 1440, height: 1000 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    for (const route of routes) {
      const response = await page.goto(base + route);
      expect(response.status(), route).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      await page.locator("footer").scrollIntoViewIfNeeded();
      await page.waitForFunction(() =>
        [...document.images].every(
          (img) => img.complete && img.naturalWidth > 0,
        ),
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `overflow: ${route} ${viewport.width}`,
      ).toBe(true);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: `test-results/screenshots/${route.slice(1) || "home"}-${viewport.width}.png`,
        fullPage: true,
      });
      console.log(
        `PASS ${route} at ${viewport.width}px: route, heading, images, no overflow`,
      );
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "/");
  for (const [label, route] of [
    ["About Us", "/about"],
    ["Teachers", "/teachers"],
    ["Students", "/students"],
    ["Contact", "/contact"],
    ["Home", "/"],
  ]) {
    await page
      .getByRole("navigation", { name: "Main navigation", exact: true })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(base + route);
  }
  await page.getByRole("link", { name: "Find a Teacher", exact: true }).click();
  await expect(page.locator(".teacher-card")).toHaveCount(6);
  await page
    .getByRole("combobox", { name: "Subject", exact: true })
    .selectOption("Physics");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.locator(".teacher-card")).toHaveCount(1);
  await page.getByRole("button", { name: "View Profile", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("dialog").getByRole("heading", { name: "Mr. Silva" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page
    .getByRole("combobox", { name: "Grade", exact: true })
    .selectOption("6");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.getByText("No teachers found")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator(".teacher-card")).toHaveCount(6);
  await page.getByPlaceholder("Search teachers...").fill("rashmi");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await expect(page.locator(".teacher-card")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Ms. Rashmi" })).toBeVisible();
  await page.goto(base + "/contact");
  await page
    .locator("#faq summary")
    .filter({ hasText: "How do I register on GuruLink?" })
    .click();
  await expect(
    page.getByText("Visit the", { exact: false }).first(),
  ).toBeVisible();
  await page.getByLabel("Full Name", { exact: true }).fill("Test Student");
  await page
    .getByLabel("Email Address", { exact: true })
    .fill("student@example.com");
  await page
    .getByRole("combobox", { name: "Subject", exact: true })
    .selectOption("Student support");
  await page
    .getByLabel("Message", { exact: true })
    .fill("I would like to find a mathematics teacher.");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "does not send messages",
  );
  await page.goto(base + "/login");
  await page
    .getByLabel("Email Address", { exact: true })
    .fill("student@example.com");
  await page.getByLabel("Password", { exact: true }).fill("password123");
  await page
    .getByRole("button", { name: "Show password", exact: true })
    .click();
  await expect(page.locator('input[name="password"]')).toHaveAttribute(
    "type",
    "text",
  );
  await page.getByRole("button", { name: "Login", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("frontend preview");
  await page.getByRole("button", { name: "Forgot password?" }).click();
  await expect(page.getByRole("status")).toContainText("Password recovery");
  await page.getByRole("button", { name: "Continue with Google" }).click();
  await expect(page.getByRole("status")).toContainText("Google sign-in");
  await page.getByRole("link", { name: "Register", exact: true }).click();
  await expect(page).toHaveURL(base + "/register");
  await expect(
    page.getByRole("button", { name: "Student", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  async function fillCommon() {
    await page.getByLabel("Full Name", { exact: true }).fill("Test User");
    await page
      .getByLabel("Email Address", { exact: true })
      .fill("test@example.com");
    await page.getByLabel("Password", { exact: true }).fill("password123");
    await page
      .getByLabel("Confirm Password", { exact: true })
      .fill("password123");
    await page
      .getByRole("combobox", { name: "Medium", exact: true })
      .selectOption("English");
    await page
      .getByRole("checkbox", { name: "Mathematics", exact: true })
      .check();
    await page.getByRole("checkbox", { name: "I agree to" }).check();
  }
  await fillCommon();
  await page
    .getByRole("combobox", { name: "Grade", exact: true })
    .selectOption("Grade 10");
  await page
    .getByLabel("Confirm Password", { exact: true })
    .fill("different123");
  await page.getByRole("button", { name: "Register", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("do not match");
  await page
    .getByLabel("Confirm Password", { exact: true })
    .fill("password123");
  await page.getByRole("button", { name: "Register", exact: true }).click();
  await expect(page.getByRole("status")).toContainText(
    "student details are ready",
  );
  await page.getByRole("button", { name: "Teacher", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Teacher Registration" }),
  ).toBeVisible();
  await expect(
    page.getByRole("combobox", { name: "Grade", exact: true }),
  ).toHaveCount(0);
  await fillCommon();
  await page.getByLabel("Teaching Experience", { exact: true }).fill("8");
  await page
    .getByLabel("Qualifications", { exact: true })
    .fill("BSc in Mathematics");
  await page.getByRole("checkbox", { name: "Grade 10", exact: true }).check();
  await page.getByRole("button", { name: "Register", exact: true }).click();
  await expect(page.getByRole("status")).toContainText(
    "teacher details are ready",
  );
  await page.screenshot({
    path: "test-results/screenshots/register-teacher-1440.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Teachers", exact: true })
    .click();
  await expect(page).toHaveURL(base + "/teachers");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
  expect(errors, "Browser errors").toEqual([]);
  console.log(
    "PASS navigation, mobile menu, filters, profile dialog, FAQ, contact form, login controls, student and teacher registration; no browser errors.",
  );
} finally {
  await browser.close();
}
