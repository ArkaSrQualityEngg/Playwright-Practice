import { test, expect, chromium } from '@playwright/test';

test.describe('Context Switching', async()=> {

    test('Switching between pages',async()=> {
        const browser = await chromium.launch();
        const context = await browser.newContext();

        const page1 = await context.newPage();
        await page1.goto('https:\/\/cognizant\.udemy\.com\/?');
        await page1.waitForLoadState("domcontentloaded");
        await expect(page1.getByRole('heading', { name: 'Welcome to Udemy Business' })).toBeVisible();
        await page1.waitForTimeout(2000);

        const page2 = await context.newPage();
        await page2.goto('https://practicetestautomation.com/practice-test-login/');
        await page2.waitForLoadState('domcontentloaded');
        await expect(page2.getByRole('heading', { name: 'Test login' })).toBeVisible();
        await page2.waitForTimeout(2000);

        await page1.bringToFront();
        await expect(page1.getByRole('link', { name: 'Continue with SSO' })).toBeVisible();
        await page1.waitForTimeout(2000);

        await page2.bringToFront();
        await expect(page2.getByText('This is a simple Login page.')).toBeVisible();
        await page2.waitForTimeout(2000);

        await page1.bringToFront();
        await page1.waitForTimeout(2000);

        for (const pages in context.pages()) {
            console.log(pages);
        }

        await context.close();
        await browser.close();
    });

    test('Switching between browser windows',async()=> {
        const browser = await chromium.launch();
        const context1 = await browser.newContext();

        const page1 = await context1.newPage();
        await page1.goto('https:\/\/cognizant\.udemy\.com\/?');
        await page1.waitForLoadState("domcontentloaded");
        await expect(page1.getByRole('heading', { name: 'Welcome to Udemy Business' })).toBeVisible();
        await page1.waitForTimeout(2000);

        const context2 = await browser.newContext();
        const page2 = await context2.newPage();
        await page2.goto('https://practicetestautomation.com/practice-test-login/');
        await page2.waitForLoadState('domcontentloaded');
        await expect(page2.getByRole('heading', { name: 'Test login' })).toBeVisible();
        await page2.waitForTimeout(2000);

        await page1.bringToFront();
        await expect(page1.getByRole('link', { name: 'Continue with SSO' })).toBeVisible();
        await page1.waitForTimeout(2000);

        await page2.bringToFront();
        await expect(page2.getByText('This is a simple Login page.')).toBeVisible();
        await page2.waitForTimeout(2000);

        await page1.bringToFront();
        await page1.waitForTimeout(2000);

        for(const context of browser.contexts()) {
            for(const page of context.pages()) {
                console.log(`URL${page} : ${page.url()}`)
            }
        }

        await browser.close();
    });
});