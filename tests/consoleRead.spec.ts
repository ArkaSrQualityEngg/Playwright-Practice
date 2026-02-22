import { test } from '@playwright/test';

test('Reading from console', async({ page })=> {
    await page.on('console',msg=> {
        console.log(`[${msg.type()}]${msg.text()}`)  // Template Literals
    })

    await page.evaluate(()=> {

        console.log("HelloWorld")
        console.log("Be careful")

    })
})