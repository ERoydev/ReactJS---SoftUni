const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


describe('Movie app', () => {
        before(async () => {
            browser = await chromium.launch({ headless: false, slowMo: 1000 });
        });

        // after(async () => {
        //     await browser.close(); 
        // });

        beforeEach(async () => {
            page = await browser.newPage();
        })
        
        // afterEach(async () => {
        //     await page.close();
        // })

        describe('Login page Register button', () => {
            it("Should redirect to register page", async function () {
                await page.goto("http://127.0.0.1:5500/Testing-Architecture/02.Movies/index.html#")
            })

    })
})


// async function main() {
//     const browser = await chromium.launch({ headless: false, slowMo: 50});
//     const page = await browser.newPage();
//     await page.goto(`https://www.google.com`);
//     await page.screenshot({path: 'screenshot.png'})
//     await browser.close();
// }

// main()
//     .then(() => {
//         console.log('success');
//         process.exit(0);
//     })
//     .catch(err => {
//         console.log(err);
//         process.exit(1);
//     })