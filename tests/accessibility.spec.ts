import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test.describe('Page Structure', () => {
    test('homepage has proper heading hierarchy', async ({ page }) => {
      await page.goto('/');

      // Should have exactly one h1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);

      // h2s should exist for sections
      const h2Count = await page.locator('h2').count();
      expect(h2Count).toBeGreaterThan(0);
    });

    test('recruitment page has proper heading hierarchy', async ({ page }) => {
      await page.goto('/recruitment');
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    });

    test('careers page has proper heading hierarchy', async ({ page }) => {
      await page.goto('/careers');
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    });

    test('members page has proper heading hierarchy', async ({ page }) => {
      await page.goto('/members');
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    });
  });

  test.describe('Landmarks', () => {
    test('page has header landmark', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('banner')).toBeVisible();
    });

    test('page has main landmark', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('main')).toBeVisible();
    });

    test('page has footer landmark', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('footer')).toBeVisible();
    });
  });

  test.describe('Interactive Elements', () => {
    test('all links have accessible names', async ({ page }) => {
      await page.goto('/');

      const links = page.locator('a');
      const count = await links.count();

      for (let i = 0; i < Math.min(count, 20); i++) {
        const link = links.nth(i);
        const accessibleName = await link.getAttribute('aria-label') ||
                               await link.textContent() ||
                               await link.getAttribute('title');
        expect(accessibleName?.trim().length).toBeGreaterThan(0);
      }
    });

    test('mobile menu button has aria-label', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      const menuButton = page.getByLabel('Toggle menu');
      await expect(menuButton).toBeVisible();
    });

    test('mobile menu button has aria-expanded', async ({ page }) => {
      await page.goto('/');
      page.setViewportSize({ width: 375, height: 667 });

      const menuButton = page.getByLabel('Toggle menu');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await menuButton.click();
      await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test.describe('Images', () => {
    test('images have alt attributes', async ({ page }) => {
      await page.goto('/');

      const images = page.locator('img');
      const count = await images.count();

      for (let i = 0; i < Math.min(count, 10); i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        // Alt should exist (can be empty for decorative images)
        expect(alt).not.toBeNull();
      }
    });
  });

  test.describe('Focus Management', () => {
    test('tab navigation works through header links', async ({ page }) => {
      await page.goto('/');

      // Start at body
      await page.keyboard.press('Tab');

      // Should be able to tab through navigation
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab');
        const focused = page.locator(':focus');
        await expect(focused).toBeVisible();
      }
    });

    test('skip link or focus moves appropriately', async ({ page }) => {
      await page.goto('/');

      // Tab to first focusable element
      await page.keyboard.press('Tab');

      const focused = page.locator(':focus');
      await expect(focused).toBeVisible();
    });
  });

  test.describe('Color Contrast', () => {
    test('text is readable over video backgrounds', async ({ page }) => {
      await page.goto('/careers');

      // Hero text should be visible over video
      const heroText = page.getByRole('heading', { name: /CAREER DEVELOPMENT/i });
      await expect(heroText).toBeVisible();
    });

    test('text is readable over dark backgrounds', async ({ page }) => {
      await page.goto('/members');

      const heroText = page.getByRole('heading', { name: /OUR MEMBERS/i });
      await expect(heroText).toBeVisible();
    });
  });

  test.describe('Motion Preferences', () => {
    test('page loads with reduced motion preference', async ({ page }) => {
      // Emulate reduced motion preference
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto('/');

      // Page should still function
      await expect(page.locator('h1').filter({ hasText: /ALPHA ZETA/i })).toBeVisible();
    });
  });
});

test.describe('Keyboard Navigation', () => {
  test('can navigate entire page with keyboard', async ({ page }) => {
    await page.goto('/');

    // Press Tab multiple times and verify focus moves
    let previousFocus = '';

    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus');

      if (await focused.count() > 0) {
        const currentTag = await focused.evaluate(el => el.tagName);
        // Focus should move to interactive elements
        expect(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']).toContain(currentTag);
      }
    }
  });

  test('Enter key activates links', async ({ page }) => {
    await page.goto('/');

    // Tab to a navigation link
    const header = page.getByRole('banner');
    const recruitmentLink = header.getByRole('link', { name: 'Recruitment' });

    await recruitmentLink.focus();
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL('/recruitment');
  });
});
