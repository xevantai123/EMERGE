const express = require("express");

const router = express.Router();

const tenantController = require("../controllers/tenant.controller");

router.post("/generate", tenantController.generateTenant); // Định nghĩa route POST /generate và liên kết với hàm generateTenant trong tenantController

module.exports = router;