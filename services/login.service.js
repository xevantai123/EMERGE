const { chromium } = require("playwright");

/**
 * Mở Browser để kiểm tra Playwright hoạt động.
 */
async function autoLogin(tenantUrl) {

    // Mở trình duyệt
    const browser = await chromium.launch({

        headless: false

    });

    // Tạo tab mới
    const page = await browser.newPage();

    // Mở Tenant
    await page.goto(tenantUrl);

    await page.getByRole("textbox", {
        name: "Email Address or User Name"
    }).fill("Admin");

    await page.getByRole("textbox", {
        name: "Credentials"
    }).fill("123123");

    await page.getByRole("button", {
        name: "Sign in"
    }).click();

    // Chờ Dashboard load
    await page.waitForTimeout(5000);



}

module.exports = {

    autoLogin

};