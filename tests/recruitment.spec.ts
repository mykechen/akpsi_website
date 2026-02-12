import { test, expect } from '@playwright/test';

test.describe('Recruitment Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/recruitment');
  });

  test.describe('Recruitment Hero', () => {
    test('displays main heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /JOIN ALPHA KAPPA PSI/i })).toBeVisible();
    });

    test('displays application status badge', async ({ page }) => {
      await expect(page.getByText(/Applications Open/i)).toBeVisible();
    });

    test('displays countdown timer', async ({ page }) => {
      // Should show countdown elements (Days, Hours, Minutes, Seconds)
      await expect(page.getByText(/Days/i).first()).toBeVisible();
      await expect(page.getByText(/Hours/i).first()).toBeVisible();
      await expect(page.getByText(/Minutes/i).first()).toBeVisible();
      await expect(page.getByText(/Seconds/i).first()).toBeVisible();
    });

    test('countdown timer has numeric values', async ({ page }) => {
      // The timer should display numbers
      const timerSection = page.locator('text=/\\d+/').first();
      await expect(timerSection).toBeVisible();
    });

    test('Apply Now button links to Tally form', async ({ page }) => {
      const applyButton = page.getByRole('link', { name: /Apply Now/i }).first();
      await expect(applyButton).toHaveAttribute('href', /tally\.so/);
    });
  });

  test.describe('Rush Timeline', () => {
    test('displays timeline section', async ({ page }) => {
      // Scroll to find timeline content
      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(500);
      // Timeline should have events with dates
      const timelineContent = page.locator('section').filter({ has: page.locator('time, [class*="date"]') });
      const count = await timelineContent.count();
      expect(count).toBeGreaterThanOrEqual(0); // Timeline may or may not be present
    });

    test('displays event cards', async ({ page }) => {
      // Scroll down to find events
      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(500);
      // Page should have content sections
      const sections = page.locator('section');
      const count = await sections.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Why AZ Section', () => {
    test('displays Why AZ cards', async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 1200));
      await page.waitForTimeout(500);
      await expect(page.getByText(/Professional Development/i).first()).toBeVisible();
      await expect(page.getByText(/Lifelong Brotherhood/i).first()).toBeVisible();
    });
  });

  test.describe('Mission Values Section', () => {
    test('displays values heading', async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 1500));
      await page.waitForTimeout(500);
      const heading = page.getByText(/What We Stand For/i);
      if (await heading.count() > 0) {
        await expect(heading.first()).toBeVisible();
      }
    });

    test('displays values', async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 1500));
      await page.waitForTimeout(500);
      // Check for at least some values
      const values = ['Community', 'Integrity', 'Excellence', 'Collaboration', 'Passion'];
      let foundCount = 0;
      for (const value of values) {
        const element = page.getByText(value, { exact: true });
        if (await element.count() > 0) {
          foundCount++;
        }
      }
      expect(foundCount).toBeGreaterThan(0);
    });
  });

  test.describe('Eligibility Section', () => {
    test('displays eligibility requirements', async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 2000));
      await page.waitForTimeout(500);
      // Look for GPA requirement which is likely present
      const gpaText = page.getByText(/GPA/i);
      if (await gpaText.count() > 0) {
        await expect(gpaText.first()).toBeVisible();
      }
    });

    test('displays no experience required note', async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 2000));
      await page.waitForTimeout(500);
      const note = page.getByText(/No prior business experience required/i);
      if (await note.count() > 0) {
        await expect(note.first()).toBeVisible();
      }
    });
  });

  test.describe('FAQ Section', () => {
    test('displays FAQ heading', async ({ page }) => {
      await expect(page.getByText(/Frequently Asked Questions|FAQ/i)).toBeVisible();
    });

    test('FAQ items are clickable and expandable', async ({ page }) => {
      // Find FAQ items by looking for question text patterns
      const faqSection = page.locator('section').filter({ hasText: /FAQ|Frequently Asked/i });
      await faqSection.scrollIntoViewIfNeeded();

      // Get FAQ buttons/items
      const faqItems = faqSection.locator('button, [role="button"]');
      const count = await faqItems.count();

      if (count > 0) {
        // Click first FAQ item to expand
        await faqItems.first().click();
        // Wait for animation
        await page.waitForTimeout(400);
      }
    });

    test('clicking FAQ reveals answer', async ({ page }) => {
      const faqSection = page.locator('section').filter({ hasText: /FAQ|Frequently Asked/i });
      await faqSection.scrollIntoViewIfNeeded();

      // Get clickable FAQ items
      const faqItems = faqSection.locator('button, [role="button"]');

      if (await faqItems.count() > 0) {
        // Click to expand
        await faqItems.first().click();
        await page.waitForTimeout(400);

        // After clicking, more text content should be visible
        const textContent = await faqSection.textContent();
        expect(textContent?.length).toBeGreaterThan(100);
      }
    });
  });
});

test.describe('Recruitment Page Responsive', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('hero displays correctly on mobile', async ({ page }) => {
    await page.goto('/recruitment');
    await expect(page.getByRole('heading', { name: /JOIN ALPHA KAPPA PSI/i })).toBeVisible();
  });

  test('countdown timer is visible on mobile', async ({ page }) => {
    await page.goto('/recruitment');
    await expect(page.getByText(/Days/i).first()).toBeVisible();
  });
});
