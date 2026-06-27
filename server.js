const express = require("express");
const path = require("path");
const { chromium } = require("playwright");

const app = express();

// Cho phép đọc JSON từ frontend
app.use(express.json());

// Serve UI
app.use(express.static(path.join(__dirname, "web")));

// API mới
app.post("/generate", async (req, res) => {

    const env = req.body.env;

    console.log("Start Playwright with env:", env);

    const tenant = await createTenant(env);

    res.json({
        message: "Tenant created",
        tenant: tenant,
        username: "Admin",
        password: "123123"
    });
});

async function createTenant(env) {

    const browser = await chromium.launch({ headless: true });

    const page = await browser.newPage();

    // GIẢ LẬP STEP (chưa gọi API thật)
    await page.goto("https://example.com");

    const now = new Date();
    const mmdd = String(now.getMonth() + 1).padStart(2, '0') +
             String(now.getDate()).padStart(2, '0');

    const result = `test${env}_${mmdd}_${now.getSeconds()}`;

    await browser.close();

    return result;
};

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});