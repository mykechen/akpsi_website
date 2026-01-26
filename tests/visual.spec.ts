import { test, expect } from '@playwright/test';

// Visual regression tests - run with --update-snapshots to generate baselines
test.describe('Visual Regression', () => {
  test.describe.configure({ retries: 0 }); // No retries for visual tests

  test.describe('Page Renders', () => {
    test('homepage renders without errors', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      // Verify key elements render
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
    });

    test('recruitment page renders without errors', async ({ page }) => {
      await page.goto('/recruitment');
      await page.waitForLoadState('domcontentloaded');

      await expect(page.locator('h1')).toBeVisible();
    });

    test('careers page renders without errors', async ({ page }) => {
      await page.goto('/careers');
      await page.waitForLoadState('domcontentloaded');

      await expect(page.locator('h1')).toBeVisible();
    });

    test('members page renders without errors', async ({ page }) => {
      await page.goto('/members');
      await page.waitForLoadState('domcontentloaded');

      await expect(page.locator('h1')).toBeVisible();
    });
  });

  test.describe('Mobile Renders', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('homepage renders on mobile', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      await expect(page.locator('h1')).toBeVisible();
      await expect(page.getByLabel('Toggle menu')).toBeVisible();
    });

    test('mobile menu renders correctly', async ({ page }) => {
      await page.goto('/');
      await page.getByLabel('Toggle menu').click();
      await page.waitForTimeout(300);

      // Menu should be expanded
      await expect(page.getByLabel('Toggle menu')).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test.describe('Component States', () => {
    test('navbar changes on scroll', async ({ page }) => {
      await page.goto('/');
      const header = page.getByRole('banner');

      // Initial state
      const initialClass = await header.getAttribute('class');

      // Scroll down
      await page.evaluate(() => window.scrollTo(0, 200));
      await page.waitForTimeout(400);

      // Scrolled state should be different
      const scrolledClass = await header.getAttribute('class');
      expect(scrolledClass).not.toBe(initialClass);
    });

    test('footer renders correctly', async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(300);

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  });
});

// Screenshot tests - uncomment and run with --update-snapshots to generate baselines
// These tests require baseline images to exist first
/*
test.describe('Screenshot Tests', () => {
  test('homepage screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage.png', { maxDiffPixels: 500 });
  });

  test('recruitment page screenshot', async ({ page }) => {
    await page.goto('/recruitment');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('recruitment.png', { maxDiffPixels: 500 });
  });
});
*/
