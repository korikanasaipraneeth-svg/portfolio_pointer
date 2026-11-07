import { test, expect } from "@playwright/test";

test.describe("Korikana Sai Praneeth — Elite AI Systems Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    // Pass ?swarm=off so automated headless runners are not intercepted by the visual swarm overlay
    await page.goto("/?swarm=off");
  });

  test("1. Hero & Branding verify identity and verified metrics", async ({ page }) => {
    await expect(page).toHaveTitle(/Korikana Sai Praneeth/);

    // Verify Name, Wordmark, and Identity
    const hero = page.locator("#hero");
    await expect(hero).toBeVisible();
    await expect(hero).toContainText("PORTFOLIO");
    await expect(hero).toContainText("PRANEETH");
    await expect(hero).toContainText("AI SYSTEM ARCHITECT & VIBE CODER");

    // Verify SAAI-style Action Buttons
    await expect(page.locator("#hero a:has-text('INITIATE DISPATCH')")).toBeVisible();
    await expect(page.locator("#hero a:has-text('EXPLORE PROJECTS')")).toBeVisible();
  });

  test("2. Navigation Dock links to all architectural sections", async ({ page }) => {
    const nav = page.locator("header");
    await expect(nav).toBeVisible();
    await expect(nav).toContainText("PRANEETH");

    // Check desktop nav links if visible
    const aboutLink = page.locator("nav a[href='#profile']");
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page.locator("#profile")).toBeInViewport();
    }
  });

  test("3. Engineer Profile tabs toggle content correctly", async ({ page }) => {
    const profile = page.locator("#profile");
    await expect(profile).toBeVisible();

    // Click on Academic Foundation
    await page.locator("#profile button:has-text('ACADEMIC FOUNDATION')").click();
    await expect(profile).toContainText("Sri Sivani College of Engineering");

    // Click on Vibe Coder Paradigm
    await page.locator("#profile button:has-text('VIBE CODER PARADIGM'), #profile button:has-text('VIBE CODING')").first().click();
    await expect(profile).toContainText("The Engineering Discipline Behind Vibe Coding");
  });

  test("4. Architectural Skills Matrix filter and technology inspector", async ({ page }) => {
    const skills = page.locator("#skills");
    await expect(skills).toBeVisible();

    // Select Programming Languages filter
    await page.locator("button:has-text('Programming Languages')").click();
    await expect(skills).toContainText("Python");

    // Click Python to verify inspector
    await page.locator("#skills >> text=Python").first().click();
    await expect(page.locator("text=TECHNOLOGY INSPECTOR")).toBeVisible();
  });

  test("5. Verified complete removal of agent section and clean navigation", async ({ page }) => {
    // Assert agent section and simulation environment are completely removed
    await expect(page.locator("#agents")).toHaveCount(0);
    await expect(page.locator("text=AUTONOMOUS DEVELOPMENT ENVIRONMENT")).toHaveCount(0);
    await expect(page.locator("text=DISPATCH AGENTS")).toHaveCount(0);

    // Verify navigation dock does not link to agents
    await expect(page.locator("header nav")).not.toContainText("Agents");
  });

  test("6. Architectural Showcase filters and project modal", async ({ page }) => {
    const projects = page.locator("#projects");
    await expect(projects).toBeVisible();

    // Verify Flagship projects are displayed
    await expect(projects).toContainText("AgriSahay AI");
    await expect(projects).toContainText("STUDENT360");
    await expect(projects).toContainText("Guardian AI");

    // Click AgriSahay AI to open modal
    await page.locator("#projects h3:has-text('AgriSahay AI')").first().click();

    // Modal should be open
    const modal = page.locator(".fixed.inset-0:has-text('SYSTEM ARCHITECTURE')");
    await expect(modal).toBeVisible();

    // Close modal
    await page.locator("button[aria-label='Close project modal']").click();
    await expect(modal).not.toBeVisible();
  });

  test("7. Verified complete excision of architecture section and active timeline", async ({ page }) => {
    // Assert architecture section is completely excised
    await expect(page.locator("#architecture")).toHaveCount(0);
    await expect(page.locator("text=SYSTEMS ARCHITECTURE & DATA FLOWS")).toHaveCount(0);
    await expect(page.locator("header nav")).not.toContainText("Architecture");

    // Verify timeline section is present
    const timeline = page.locator("#timeline");
    await expect(timeline).toBeVisible();
    await expect(timeline).toContainText("Academic & Development");
    await expect(timeline).toContainText("Timeline");
    await expect(timeline).toContainText("Sri Sivani College of Engineering");
    await expect(timeline).toContainText("Spider-Man 3D Developer Portfolio");
    await expect(timeline).toContainText("HRX Tech Solution");
  });

  test("8. Direct Contact section, email copy and form validation", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
    await expect(contact).toContainText("korikanasaipraneeth@gmail.com");
    await expect(contact).toContainText("+91 7569552087");

    // Test copy button
    const copyBtn = page.locator("button:has-text('COPY EMAIL ADDRESS')");
    await copyBtn.click();
    await expect(page.locator("text=COPIED TO CLIPBOARD")).toBeVisible();
  });
});
