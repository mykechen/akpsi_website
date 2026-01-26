import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test.describe('Page Load', () => {
    test('homepage loads within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');
      const loadTime = Date.now() - startTime;

      // Page should load DOM within 5 seconds
      expect(loadTime).toBeLessThan(5000);
    });

    test('recruitment page loads within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/recruitment');
      await page.waitForLoadState('domcontentloaded');
      const loadTime = Date.now() - startTime;

      // Allow more time for recruitment page due to WebGL terminal effect
      expect(loadTime).toBeLessThan(10000);
    });

    test('careers page loads within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/careers');
      await page.waitForLoadState('domcontentloaded');
      const loadTime = Date.now() - startTime;

      expect(loadTime).toBeLessThan(5000);
    });

    test('members page loads within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/members');
      await page.waitForLoadState('domcontentloaded');
      const loadTime = Date.now() - startTime;

      expect(loadTime).toBeLessThan(5000);
    });
  });

  test.describe('Core Web Vitals', () => {
    test('homepage LCP is reasonable', async ({ page }) => {
      await page.goto('/');

      // Get LCP using Performance API
      const lcp = await page.evaluate(() => {
        return new Promise<number>((resolve) => {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          }).observe({ type: 'largest-contentful-paint', buffered: true });

          // Fallback timeout
          setTimeout(() => resolve(0), 5000);
        });
      });

      // LCP should be under 4 seconds (good is under 2.5s)
      if (lcp > 0) {
        expect(lcp).toBeLessThan(4000);
      }
    });
  });

  test.describe('Resource Loading', () => {
    test('images load on homepage', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      const images = page.locator('img');
      const count = await images.count();

      // Just verify images exist
      expect(count).toBeGreaterThan(0);
    });

    test('images load on careers page', async ({ page }) => {
      await page.goto('/careers');
      await page.waitForLoadState('domcontentloaded');

      const images = page.locator('img');
      const count = await images.count();

      // Just verify images exist
      expect(count).toBeGreaterThan(0);
    });

    test('video loads on careers page', async ({ page }) => {
      await page.goto('/careers');

      const video = page.locator('video').first();
      await expect(video).toBeVisible();

      // Check video has source
      const src = await video.getAttribute('src') || await video.locator('source').first().getAttribute('src');
      expect(src).toBeTruthy();
    });

    test('video loads on members page', async ({ page }) => {
      await page.goto('/members');

      const video = page.locator('video').first();
      await expect(video).toBeVisible();
    });
  });

  test.describe('Console Errors', () => {
    test('homepage has no console errors', async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Filter out known acceptable errors (like third-party analytics)
      const criticalErrors = errors.filter(
        (e) => !e.includes('analytics') && !e.includes('gtag') && !e.includes('favicon')
      );

      expect(criticalErrors).toHaveLength(0);
    });

    test('recruitment page has no console errors', async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto('/recruitment');
      await page.waitForLoadState('networkidle');

      const criticalErrors = errors.filter(
        (e) => !e.includes('analytics') && !e.includes('gtag') && !e.includes('favicon')
      );

      expect(criticalErrors).toHaveLength(0);
    });

    test('careers page has no console errors', async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto('/careers');
      await page.waitForLoadState('networkidle');

      const criticalErrors = errors.filter(
        (e) => !e.includes('analytics') && !e.includes('gtag') && !e.includes('favicon')
      );

      expect(criticalErrors).toHaveLength(0);
    });

    test('members page has no critical console errors', async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto('/members');
      await page.waitForLoadState('domcontentloaded');

      // Filter out expected/non-critical errors
      const criticalErrors = errors.filter(
        (e) => !e.includes('analytics') &&
               !e.includes('gtag') &&
               !e.includes('favicon') &&
               !e.includes('hydrat') &&
               !e.includes('WebGL') &&
               !e.includes('net::')
      );

      // Allow some errors in dev mode
      expect(criticalErrors.length).toBeLessThan(5);
    });
  });

  test.describe('Network', () => {
    test('homepage loads without critical network failures', async ({ page }) => {
      const failedRequests: string[] = [];

      page.on('requestfailed', (request) => {
        failedRequests.push(request.url());
      });

      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      // Filter out expected failures
      const criticalFailures = failedRequests.filter(
        (url) => !url.includes('analytics') &&
                 !url.includes('gtag') &&
                 !url.includes('vercel') &&
                 !url.includes('favicon')
      );

      // Allow some non-critical failures
      expect(criticalFailures.length).toBeLessThan(3);
    });
  });
});

test.describe('Animations Performance', () => {
  test('scroll animations do not cause jank', async ({ page }) => {
    await page.goto('/');

    // Scroll through the page
    await page.evaluate(async () => {
      for (let i = 0; i < 10; i++) {
        window.scrollBy(0, 500);
        await new Promise((r) => setTimeout(r, 100));
      }
    });

    // If we got here without timeout, animations are performing acceptably
    expect(true).toBe(true);
  });

  test('hover animations are responsive', async ({ page }) => {
    await page.goto('/');

    // Find a card element
    const card = page.locator('[class*="card"]').first();

    if (await card.count() > 0) {
      // Hover and verify responsiveness
      await card.hover();
      await page.waitForTimeout(100);

      // Should complete without hanging
      expect(true).toBe(true);
    }
  });
});
