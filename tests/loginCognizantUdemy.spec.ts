import { test, expect } from '@playwright/test';

test('Login to Cognizant Udemy', async({ page })=> {
    await page.goto('https:\/\/cognizant\.udemy\.com\/?');
    await page.getByRole('link', { name: 'Continue with SSO' }).click();
    const locator_email = page.getByRole('textbox', { name: 'Enter your email, phone, or' });
    await expect(locator_email).toBeVisible();
    await locator_email.fill('834023@cognizant.com');
    await page.getByRole('button', { name: 'Next' }).click();
    const locator_pwd = page.getByRole('textbox', { name: 'Enter the password for 834023' });
    await locator_pwd.fill('Molybdenum@2101');
    await page.getByRole('button', { name: 'Sign in' }).click();
});