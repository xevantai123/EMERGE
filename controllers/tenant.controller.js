const tenantService = require("../services/tenant.service"); //nhận request từ route, gọi service để xử lý logic và trả về response

async function generateTenant(req, res) {

    const owner = req.body.env;

    const result = await tenantService.generate(owner);

    res.json(result);

}

module.exports = {
    generateTenant
};