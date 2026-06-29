const tenantService = require("../services/tenant.service"); // service dùng để tạo tenant mới bằng Playwright
const loginService = require("../services/login.service"); // Service dùng để Auto Login bằng Playwright

async function generateTenant(req, res) {

    const owner = req.body.env;

    const result = await tenantService.generate(owner);

    res.json(result);

}

async function autoLogin(req, res) {

    // Lấy URL từ Browser gửi lên
    const { url } = req.body;

    const result = await loginService.autoLogin(url);

    res.json(result);

}

module.exports = {
    generateTenant,
    autoLogin
};
 //nhận request từ route, gọi service để xử lý logic và trả về response -> gọi qua tenant.service.js