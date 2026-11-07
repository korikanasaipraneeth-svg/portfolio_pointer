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
    await expect(page.locator("#hero a:has-text('EXPLORE ARCHITECTURE')")).toBeVisible();
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

  test("5. Autonomous Development Environment executes agent build pipeline", async ({ page }) => {
    const agents = page.locator("#agents");
    await expect(agents).toBeVisible();
    await expect(agents).toContainText("AUTONOMOUS DEVELOPMENT ENVIRONMENT");

    // Mode Toggle
    const realModeBtn = page.locator("button:has-text('MODE B: REAL AI EXECUTION')");
    await realModeBtn.click();
    await expect(page.locator("text=ACTIVE MODE: REAL AI EXECUTION GATEWAY")).toBeVisible();

    // Back to Mode A
    await page.locator("button:has-text('MODE A: LOCAL SIMULATION')").click();

    // Dispatch Agents
    const dispatchBtn = page.locator("button:has-text('DISPATCH AGENTS')");
    await dispatchBtn.click();

    // Verify build logs start appearing
    await expect(page.locator("text=INITIATING BUILD RUN")).toBeVisible({ timeout: 5000 });
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

  test("7. Systems Architecture interactive topologies", async ({ page }) => {
    const arch = page.locator("#architecture");
    await expect(arch).toBeVisible();
    await expect(arch).toContainText("SYSTEMS ARCHITECTURE & DATA FLOWS");

    // Click on STUDENT360 flow
    await page.locator("button:has-text('STUDENT360 Tri-Portal')").click();
    await expect(arch).toContainText("STUDENT360 Tri-Portal Verification");
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
