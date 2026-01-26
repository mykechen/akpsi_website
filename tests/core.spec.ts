import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Alpha Zeta/);
  });

  test('displays navbar with logo', async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('banner');
    await expect(header.getByRole('link', { name: 'ALPHA ZETA' })).toBeVisible();
  });

  test('displays navigation links in header', async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('banner');
    await expect(header.getByRole('link', { name: 'About Us' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Recruitment' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Careers' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Members' })).toBeVisible();
  });

  test('displays Apply Now button', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Apply Now' }).first()).toBeVisible();
  });

  test('hero section loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('can navigate to Recruitment page', async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('banner');
    await header.getByRole('link', { name: 'Recruitment' }).click();
    await expect(page).toHaveURL('/recruitment');
  });

  test('can navigate to Careers page', async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('banner');
    await header.getByRole('link', { name: 'Careers' }).click();
    await expect(page).toHaveURL('/careers');
  });

  test('can navigate to Members page', async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('banner');
    await header.getByRole('link', { name: 'Members' }).click();
    await expect(page).toHaveURL('/members');
  });

  test('logo navigates to homepage', async ({ page }) => {
    await page.goto('/recruitment');
    const header = page.getByRole('banner');
    await header.getByRole('link', { name: 'ALPHA ZETA' }).click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Recruitment Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/recruitment');
    await expect(page).toHaveTitle(/Alpha Zeta/);
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Careers Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/careers');
    await expect(page).toHaveTitle(/Alpha Zeta/);
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Members Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/members');
    await expect(page).toHaveTitle(/Alpha Zeta/);
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('shows mobile menu button', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByLabel('Toggle menu')).toBeVisible();
  });

  test('can open and close mobile menu', async ({ page }) => {
    await page.goto('/');
    const menuButton = page.getByLabel('Toggle menu');

    // Open menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Close menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile menu has navigation links', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Toggle menu').click();

    // Wait for menu animation
    await page.waitForTimeout(300);

    // Check mobile nav links are visible (use first() to get the mobile menu link)
    const header = page.getByRole('banner');
    await expect(header.getByRole('link', { name: 'About Us' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Recruitment' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Careers' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Members' })).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('footer is visible on homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('page has proper heading structure', async ({ page }) => {
    await page.goto('/');
    // At least one h1 should exist
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });
});
