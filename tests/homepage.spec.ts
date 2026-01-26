import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Hero Section', () => {
    test('displays main heading and subtitle', async ({ page }) => {
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.getByText(/USC's Premier Business Society/i).first()).toBeVisible();
    });

    test('Apply for Spring 2026 button links to Tally form', async ({ page }) => {
      const applyButton = page.getByRole('link', { name: /Apply for Spring 2026/i });
      await expect(applyButton).toBeVisible();
      await expect(applyButton).toHaveAttribute('href', /tally\.so/);
    });

    test('Explore Careers button navigates to careers page', async ({ page }) => {
      await page.getByRole('link', { name: /Explore Careers/i }).click();
      await expect(page).toHaveURL('/careers');
    });

    test('scroll indicator is visible', async ({ page }) => {
      // Scroll indicator should be at the bottom of hero
      const scrollIndicator = page.locator('text=Scroll').first();
      await expect(scrollIndicator).toBeVisible();
    });
  });

  test.describe('About Section', () => {
    test('displays statistics correctly', async ({ page }) => {
      // Scroll down to make sure stats are in view
      await page.evaluate(() => window.scrollBy(0, 500));
      await expect(page.getByText('100+', { exact: true }).first()).toBeVisible();
      await expect(page.getByText('15+').first()).toBeVisible();
      await expect(page.getByText('500+').first()).toBeVisible();
    });

    test('displays about section heading', async ({ page }) => {
      await expect(page.getByText(/premier business society/i).first()).toBeVisible();
    });
  });

  test.describe('What You Will Get Section', () => {
    test('displays all three cards', async ({ page }) => {
      await expect(page.getByText('5+ Career Tracks')).toBeVisible();
      await expect(page.getByText('Lasting Brotherhood')).toBeVisible();
      await expect(page.getByText('Close Cohorts')).toBeVisible();
    });
  });

  test.describe('Company Carousel', () => {
    test('displays Where We Are Now heading', async ({ page }) => {
      await expect(page.getByText(/Where We Are Now/i)).toBeVisible();
    });

    test('displays company logos', async ({ page }) => {
      // Check that at least some company logos are rendered
      const companySection = page.locator('section').filter({ hasText: /Where We Are Now/i });
      const images = companySection.locator('img');
      const count = await images.count();
      expect(count).toBeGreaterThan(5);
    });

    test('displays additional companies text', async ({ page }) => {
      await expect(page.getByText(/100\+ more companies/i)).toBeVisible();
    });
  });

  test.describe('Bento Photo Grid', () => {
    test('displays gallery images', async ({ page }) => {
      // The photo grid should have multiple images
      const galleryImages = page.locator('img[alt*="gallery"], img[alt*="Gallery"], img[src*="gallery"]');
      const count = await galleryImages.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Executive Board Section', () => {
    test('displays Executive Board heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /Executive Board/i })).toBeVisible();
    });

    test('displays member cards with photos', async ({ page }) => {
      // Check that executive board section has member cards
      const execSection = page.locator('section').filter({ hasText: /Executive Board/i });
      const memberImages = execSection.locator('img');
      const count = await memberImages.count();
      expect(count).toBeGreaterThan(0);
    });

    test('View All Members button navigates to members page', async ({ page }) => {
      await page.getByRole('link', { name: /View All Members/i }).click();
      await expect(page).toHaveURL('/members');
    });
  });
});

test.describe('Homepage Responsive', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('hero content is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.getByText(/USC's Premier Business Society/i).first()).toBeVisible();
  });

  test('statistics are visible on mobile', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, 500));
    await expect(page.getByText('100+', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('15+').first()).toBeVisible();
    await expect(page.getByText('500+').first()).toBeVisible();
  });
});
