const { chromium } = require("playwright");
async function registerTenant(companyName, email) {

    const browser = await chromium.launch({
        headless: false,
        channel: "chrome"
    });

    console.log("Browser:", browser.browserType().name());
    console.log("Version:", browser.version());

    const page = await browser.newPage();

    await page.goto("https://emergeapp.net/register/");

    await page
        .getByRole("textbox", { name: "Valid Company Name" })
        .fill(companyName);

    await page
        .getByRole("textbox", { name: "Business Email" })
        .fill(email);

    // await page
    //     .getByRole("button", { name: "CREATE FREE ACCOUNT" })
    //     .click();

}

module.exports = {
    registerTenant
};