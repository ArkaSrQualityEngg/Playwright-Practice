import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test('Accessibility Testing', async({page}, testInfo)=> {

    const accessibilityScanResults = await new AxeBuilder({page}).analyze();
    await page.goto('https://soulhq.ai/');
    expect(accessibilityScanResults.violations).toEqual([]);
    await testInfo.attach('accessibility-scan-results',{
        body: JSON.stringify(accessibilityScanResults,null,2),
        contentType: 'application/json'
    })
});