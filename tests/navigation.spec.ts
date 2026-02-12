import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Desktop Navigation', () => {
    test('navbar is fixed at top', async ({ page }) => {
      await page.goto('/');
      const header = page.getByRole('banner');
      await expect(header).toBeVisible();

      // Scroll down
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(100);

      // Header should still be visible (fixed position)
      await expect(header).toBeVisible();
    });

    test('navbar changes style on scroll', async ({ page }) => {
      await page.goto('/');
      const header = page.getByRole('banner');

      // Get initial class
      const initialClass = await header.getAttribute('class');

      // Scroll down
      await page.evaluate(() => window.scrollTo(0, 100));
      await page.waitForTimeout(400);

      // Get class after scroll
      const scrolledClass = await header.getAttribute('class');

      // Classes should be different (background applied on scroll)
      expect(scrolledClass).not.toBe(initialClass);
    });

    test('all nav links work correctly', async ({ page }) => {
      await page.goto('/');
      const header = page.getByRole('banner');

      // Test each link
      await header.getByRole('link', { name: 'Recruitment' }).click();
      await expect(page).toHaveURL('/recruitment');

      await header.getByRole('link', { name: 'Careers' }).click();
      await expect(page).toHaveURL('/careers');

      await header.getByRole('link', { name: 'Members' }).click();
      await expect(page).toHaveURL('/members');

      await header.getByRole('link', { name: 'About Us' }).click();
      await expect(page).toHaveURL('/');
    });

    test('active link is highlighted', async ({ page }) => {
      await page.goto('/recruitment');
      const header = page.getByRole('banner');

      const recruitmentLink = header.getByRole('link', { name: 'Recruitment' });
      const linkClass = await recruitmentLink.getAttribute('class');

      // Active link should have text-accent or text-white class (depends on scroll state)
      expect(linkClass).toMatch(/text-accent|text-white/i);
    });
  });

  test.describe('Mobile Navigation', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('hamburger menu is visible on mobile', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByLabel('Toggle menu')).toBeVisible();
    });

    test('desktop nav links are hidden on mobile', async ({ page }) => {
      await page.goto('/');
      const header = page.getByRole('banner');

      // Desktop nav should be hidden (has md:flex class)
      const desktopNav = header.locator('.hidden.md\\:flex');
      await expect(desktopNav).not.toBeVisible();
    });

    test('mobile menu opens and shows links', async ({ page }) => {
      await page.goto('/');
      await page.getByLabel('Toggle menu').click();
      await page.waitForTimeout(300);

      // Mobile links should be visible
      const header = page.getByRole('banner');
      await expect(header.getByRole('link', { name: 'About Us' })).toBeVisible();
      await expect(header.getByRole('link', { name: 'Recruitment' })).toBeVisible();
      await expect(header.getByRole('link', { name: 'Careers' })).toBeVisible();
      await expect(header.getByRole('link', { name: 'Members' })).toBeVisible();
    });

    test('clicking mobile nav link navigates and closes menu', async ({ page }) => {
      await page.goto('/');
      await page.getByLabel('Toggle menu').click();
      await page.waitForTimeout(300);

      const header = page.getByRole('banner');
      await header.getByRole('link', { name: 'Recruitment' }).click();

      await expect(page).toHaveURL('/recruitment');

      // Menu should close after navigation
      const menuButton = page.getByLabel('Toggle menu');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('mobile menu has Apply Now button', async ({ page }) => {
      await page.goto('/');
      await page.getByLabel('Toggle menu').click();
      await page.waitForTimeout(300);

      await expect(page.getByRole('link', { name: 'Apply Now' })).toBeVisible();
    });
  });

  test.describe('Footer Navigation', () => {
    test('footer is present on all pages', async ({ page }) => {
      const pages = ['/', '/recruitment', '/careers', '/members'];

      for (const path of pages) {
        await page.goto(path);
        await expect(page.locator('footer')).toBeVisible();
      }
    });

    test('footer contains navigation links', async ({ page }) => {
      await page.goto('/');
      const footer = page.locator('footer');

      await expect(footer.getByRole('link', { name: /About Us/i })).toBeVisible();
      await expect(footer.getByRole('link', { name: /Recruitment/i })).toBeVisible();
      await expect(footer.getByRole('link', { name: /Careers/i })).toBeVisible();
      await expect(footer.getByRole('link', { name: /Members/i })).toBeVisible();
    });

    test('footer contains Alpha Kappa Psi logo', async ({ page }) => {
      await page.goto('/');
      const footer = page.locator('footer');
      await expect(footer.getByRole('link', { name: /ALPHA KAPPA PSI/i })).toBeVisible();
    });

    test('footer navigation links work', async ({ page }) => {
      await page.goto('/');
      const footer = page.locator('footer');

      await footer.getByRole('link', { name: /Recruitment/i }).click();
      await expect(page).toHaveURL('/recruitment');
    });
  });
});

test.describe('External Links', () => {
  test('Apply Now button has correct external link', async ({ page }) => {
    await page.goto('/');
    const applyButton = page.getByRole('link', { name: 'Apply Now' }).first();
    await expect(applyButton).toHaveAttribute('href', /tally\.so\/r\/GxR5Rk/);
  });

  test('Apply for Spring 2026 has correct external link', async ({ page }) => {
    await page.goto('/');
    const applyButton = page.getByRole('link', { name: /Apply for Spring 2026/i });
    await expect(applyButton).toHaveAttribute('href', /tally\.so/);
  });

  test('recruitment page Apply Now has correct link', async ({ page }) => {
    await page.goto('/recruitment');
    const applyButton = page.getByRole('link', { name: /Apply Now/i }).first();
    await expect(applyButton).toHaveAttribute('href', /tally\.so/);
  });
});
