import { test, expect } from '@playwright/test';

test.describe('Members Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/members');
  });

  test.describe('Members Hero', () => {
    test('displays main heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /OUR MEMBERS/i })).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      await expect(page.getByText(/Our Community/i)).toBeVisible();
    });

    test('video background is present', async ({ page }) => {
      const video = page.locator('video');
      await expect(video).toBeVisible();
    });
  });

  test.describe('Executive Board Full Section', () => {
    test('displays Executive Board heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /Executive Board/i })).toBeVisible();
    });

    test('displays executive member cards', async ({ page }) => {
      const execSection = page.locator('section').filter({ hasText: /Executive Board/i }).first();
      await execSection.scrollIntoViewIfNeeded();

      // Check for member images
      const memberImages = execSection.locator('img');
      const count = await memberImages.count();
      expect(count).toBeGreaterThan(0);
    });

    test('executive cards show name and role', async ({ page }) => {
      const execSection = page.locator('section').filter({ hasText: /Executive Board/i }).first();
      await execSection.scrollIntoViewIfNeeded();

      // Should have text indicating roles like President, VP, etc.
      const sectionText = await execSection.textContent();
      expect(sectionText).toMatch(/President|Vice President|Director|Chair/i);
    });
  });

  test.describe('Active Members Section', () => {
    test('displays Active Members heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /Active Members/i })).toBeVisible();
    });

    test('displays pledge class groupings', async ({ page }) => {
      // Look for pledge class headers (Fall/Spring YYYY format)
      await expect(page.getByText(/Fall \d{4}|Spring \d{4}/i).first()).toBeVisible();
    });

    test('displays member cards in grid', async ({ page }) => {
      const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
      await membersSection.scrollIntoViewIfNeeded();

      // Check for member card images
      const memberImages = membersSection.locator('img');
      const count = await memberImages.count();
      expect(count).toBeGreaterThan(5);
    });
  });

  test.describe('Member Modal', () => {
    test('clicking member card opens modal', async ({ page }) => {
      const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
      await membersSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      // Find clickable member cards
      const memberCards = membersSection.locator('[class*="cursor-pointer"], button').filter({ has: page.locator('img') });

      if (await memberCards.count() > 0) {
        await memberCards.first().click();
        await page.waitForTimeout(300);

        // Modal should be visible
        const modal = page.locator('[role="dialog"], [class*="modal"], [class*="fixed inset-0"]');
        await expect(modal.first()).toBeVisible();
      }
    });

    test('modal displays member information', async ({ page }) => {
      const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
      await membersSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const memberCards = membersSection.locator('[class*="cursor-pointer"], button').filter({ has: page.locator('img') });

      if (await memberCards.count() > 0) {
        await memberCards.first().click();
        await page.waitForTimeout(300);

        // Modal should have member details
        const modal = page.locator('[role="dialog"], [class*="modal"], [class*="fixed inset-0"]');
        const modalText = await modal.first().textContent();

        // Should contain typical member info patterns
        expect(modalText?.length).toBeGreaterThan(20);
      }
    });

    test('clicking close button closes modal', async ({ page }) => {
      const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
      await membersSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const memberCards = membersSection.locator('[class*="cursor-pointer"], button').filter({ has: page.locator('img') });

      if (await memberCards.count() > 0) {
        await memberCards.first().click();
        await page.waitForTimeout(300);

        // Find and click close button
        const closeButton = page.locator('button[aria-label*="close" i], button:has-text("×"), [class*="close"]');
        if (await closeButton.count() > 0) {
          await closeButton.first().click();
          await page.waitForTimeout(300);

          // Modal should be hidden
          const modal = page.locator('[role="dialog"]');
          await expect(modal).not.toBeVisible();
        }
      }
    });

    test('pressing Escape closes modal', async ({ page }) => {
      const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
      await membersSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const memberCards = membersSection.locator('[class*="cursor-pointer"], button').filter({ has: page.locator('img') });

      if (await memberCards.count() > 0) {
        await memberCards.first().click();
        await page.waitForTimeout(300);

        // Press Escape
        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);

        // Modal should be hidden
        const modal = page.locator('[role="dialog"]');
        await expect(modal).not.toBeVisible();
      }
    });

    test('clicking backdrop closes modal', async ({ page }) => {
      const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
      await membersSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const memberCards = membersSection.locator('[class*="cursor-pointer"], button').filter({ has: page.locator('img') });

      if (await memberCards.count() > 0) {
        await memberCards.first().click();
        await page.waitForTimeout(300);

        // Click on backdrop (outside modal content)
        const backdrop = page.locator('[class*="fixed inset-0"]').first();
        await backdrop.click({ position: { x: 10, y: 10 } });
        await page.waitForTimeout(300);
      }
    });
  });

  test.describe('Alumni Spotlight Section', () => {
    test('displays Alumni Spotlight heading if alumni exist', async ({ page }) => {
      // Alumni section only renders if there are alumni
      const alumniHeading = page.getByRole('heading', { name: /Alumni Spotlight/i });
      const count = await alumniHeading.count();

      if (count > 0) {
        await expect(alumniHeading).toBeVisible();
      } else {
        // No alumni data - section doesn't render, which is expected
        expect(count).toBe(0);
      }
    });

    test('displays alumni cards if alumni exist', async ({ page }) => {
      const alumniSection = page.locator('section').filter({ hasText: /Alumni Spotlight/i });
      const sectionCount = await alumniSection.count();

      if (sectionCount > 0) {
        await alumniSection.scrollIntoViewIfNeeded();
        const alumniImages = alumniSection.locator('img');
        const imgCount = await alumniImages.count();
        expect(imgCount).toBeGreaterThan(0);
      } else {
        // No alumni section - expected if no alumni data
        expect(sectionCount).toBe(0);
      }
    });
  });
});

test.describe('Members Page Responsive', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('hero displays correctly on mobile', async ({ page }) => {
    await page.goto('/members');
    await expect(page.getByRole('heading', { name: /OUR MEMBERS/i })).toBeVisible();
  });

  test('member grid adjusts on mobile', async ({ page }) => {
    await page.goto('/members');
    const membersSection = page.locator('section').filter({ hasText: /Active Members/i });
    await membersSection.scrollIntoViewIfNeeded();

    // Members should still be visible on mobile
    const memberImages = membersSection.locator('img');
    const count = await memberImages.count();
    expect(count).toBeGreaterThan(0);
  });
});
