import { test, expect, chromium } from '@playwright/test';

test.describe('Context Switching', async()=> {

    test('Switching between pages',async()=> {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page1 = await context.newPage();
        // await page1.goto('https:\/\/cognizant\.udemy\.com\/?');
        await page1.waitForLoadState("domcontentloaded");
        await expect(page1.getByRole('heading', { name: 'Welcome to Udemy Business' })).toBeVisible();
        await page1.waitForTimeout(3000);

    });
});