const { chromium } = require("playwright");

async function createTenant(payload, urlSubdomain) {

    const browser = await chromium.launch({ headless: true });

    const page = await browser.newPage();

    const response = await page.request.post(
        `https://emergeapieu.emerge-test.com:8888/api/v1/NonAuthorizedAPIs/NewTenant/${urlSubdomain}`,
        {
            data: payload
        }
    );

    const result = await response.json();

    await browser.close();

    return {
        status: response.status(),
        body: result
    };
}

module.exports = {
    createTenant
};