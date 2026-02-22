import { test, expect } from '@playwright/test';

test.describe('Shadow DOMs', async()=> {
    test('Simple Shadow Button', async({ page })=> {
        await page.goto('https://practice.expandtesting.com/shadowdom');
        const loc_shadow_button = page.locator('div#shadow-host >>> #my-btn');
        await expect(loc_shadow_button).toBeVisible();
        await expect(loc_shadow_button).toHaveText('This button is inside a Shadow DOM.');
        await loc_shadow_button.click();
    });
    test('Shadow inside iframe', async({ page })=> {

        await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');
        await expect(page.locator('iframe#pact').first().contentFrame().locator('div#snacktime >>> div.uojl')).toBeVisible();

    });
    test('Iframe inside Shadow', async({ page })=> {

        await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');
        await expect(page.locator('div#userName').locator('iframe#pact1').contentFrame().locator('div.elementor-element >> button#connect')).toBeVisible();
        await page.locator('div#userName').locator('iframe#pact1').contentFrame().locator('div.elementor-element >> button#connect').click();

    });
});