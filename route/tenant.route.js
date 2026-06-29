const express = require("express");

const router = express.Router();

const tenantController = require("../controllers/tenant.controller");

router.post("/generate", tenantController.generateTenant); // API tạo Tenant mới

router.post("/auto-login", tenantController.autoLogin); // API dùng để tự động đăng nhập bằng Playwright

module.exports = router;