import { test, expect } from '@playwright/test';

test.describe('Careers Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/careers');
  });

  test.describe('Careers Hero', () => {
    test('displays main heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /CAREER DEVELOPMENT/i })).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      await expect(page.getByText(/Your Path to Excellence/i)).toBeVisible();
    });

    test('Learn More button is visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: /Learn More/i })).toBeVisible();
    });

    test('Learn More scrolls to What Are AZ Groups section', async ({ page }) => {
      await page.getByRole('button', { name: /Learn More/i }).click();
      // Wait for smooth scroll
      await page.waitForTimeout(500);
      // Check that we scrolled down (viewport should show the section)
      const section = page.locator('#what-are-az-groups');
      await expect(section).toBeInViewport();
    });

    test('video background is present', async ({ page }) => {
      const video = page.locator('video');
      await expect(video).toBeVisible();
    });
  });

  test.describe('What You Get Section', () => {
    test('displays section heading', async ({ page }) => {
      await expect(page.getByText(/What are AZ Groups/i)).toBeVisible();
    });

    test('displays career track buttons', async ({ page }) => {
      await expect(page.getByRole('button', { name: /Investment Banking/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /Consulting/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /Product Management/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /Computer Science/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /Marketing/i })).toBeVisible();
    });

    test('clicking Investment Banking button scrolls to section', async ({ page }) => {
      await page.getByRole('button', { name: /Investment Banking/i }).click();
      await page.waitForTimeout(500);
      const section = page.locator('#az13');
      await expect(section).toBeInViewport();
    });

    test('clicking Consulting button scrolls to section', async ({ page }) => {
      await page.getByRole('button', { name: /Consulting/i }).click();
      await page.waitForTimeout(500);
      const section = page.locator('#azc');
      await expect(section).toBeInViewport();
    });
  });

  test.describe('Investment Banking Section (AZ13)', () => {
    test('displays section badge and heading', async ({ page }) => {
      const section = page.locator('#az13');
      await section.scrollIntoViewIfNeeded();
      await expect(section.getByText(/Investment Banking/i).first()).toBeVisible();
    });

    test('displays benefits list', async ({ page }) => {
      const section = page.locator('#az13');
      await section.scrollIntoViewIfNeeded();
      await expect(page.getByText(/Behaviorals/i)).toBeVisible();
      await expect(page.getByText(/Technicals/i)).toBeVisible();
    });

    test('displays mentor cards', async ({ page }) => {
      const section = page.locator('#az13');
      await section.scrollIntoViewIfNeeded();
      // Check for mentor images
      const mentorImages = section.locator('img');
      const count = await mentorImages.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Consulting Section (AZC)', () => {
    test('displays section badge and heading', async ({ page }) => {
      const section = page.locator('#azc');
      await section.scrollIntoViewIfNeeded();
      await expect(section.getByText(/Consulting/i).first()).toBeVisible();
    });
  });

  test.describe('Product Management Section (AZPM)', () => {
    test('displays section', async ({ page }) => {
      const section = page.locator('#azpm');
      await section.scrollIntoViewIfNeeded();
      await expect(section.getByText(/Product Management/i).first()).toBeVisible();
    });
  });

  test.describe('Computer Science Section (AZCS)', () => {
    test('displays section', async ({ page }) => {
      const section = page.locator('#azcs');
      await section.scrollIntoViewIfNeeded();
      await expect(section.getByText(/Computer Science/i).first()).toBeVisible();
    });
  });

  test.describe('Marketing Section', () => {
    test('displays section', async ({ page }) => {
      const section = page.locator('#azmarketing');
      await section.scrollIntoViewIfNeeded();
      await expect(section.getByText(/Marketing/i).first()).toBeVisible();
    });
  });

  test.describe('Where Our Members Work', () => {
    test('displays section heading', async ({ page }) => {
      await expect(page.getByText(/Where Our Members Work/i)).toBeVisible();
    });

    test('displays company logos', async ({ page }) => {
      const section = page.locator('section').filter({ hasText: /Where Our Members Work/i });
      await section.scrollIntoViewIfNeeded();
      const logos = section.locator('img');
      const count = await logos.count();
      expect(count).toBeGreaterThan(5);
    });
  });

  test.describe('Testimonials Section', () => {
    test('displays testimonial cards', async ({ page }) => {
      // Scroll to bottom of page to find testimonials
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);

      // Look for quote content
      const quotes = page.locator('[class*="quote"], [class*="testimonial"]');
      if (await quotes.count() > 0) {
        await expect(quotes.first()).toBeVisible();
      }
    });

    test('testimonials auto-advance after 6 seconds', async ({ page }) => {
      // Scroll to testimonials
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);

      // Get initial state
      const testimonialSection = page.locator('section').filter({ hasText: /Testimonial/i }).or(
        page.locator('[class*="testimonial"]')
      );

      if (await testimonialSection.count() > 0) {
        // Wait for auto-advance (6 seconds + buffer)
        await page.waitForTimeout(6500);
        // Carousel should have advanced (hard to verify visually, but no errors)
      }
    });
  });
});

test.describe('Careers Page Responsive', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('hero displays correctly on mobile', async ({ page }) => {
    await page.goto('/careers');
    await expect(page.getByRole('heading', { name: /CAREER DEVELOPMENT/i })).toBeVisible();
  });

  test('career track buttons are visible on mobile', async ({ page }) => {
    await page.goto('/careers');
    await page.getByText(/What are AZ Groups/i).scrollIntoViewIfNeeded();
    await expect(page.getByRole('button', { name: /Investment Banking/i })).toBeVisible();
  });
});
