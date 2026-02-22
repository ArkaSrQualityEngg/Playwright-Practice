import { test } from '@playwright/test';
import * as fs from 'fs';

test('File I/O in Playwright', async({ page })=> {

    const data = await fs.promises.readFile('john.txt','utf-8');
    console.log(data)

    await fs.promises.writeFile('priyam.txt','Nunur baal');
});
