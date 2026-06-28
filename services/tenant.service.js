const generator = require("../utils/tenantNameGenerator");
const apiService = require("./api.service");

async function generate(ownerName) {

    let version = 1;

    let lastError = null;

    while (version <= 5) {

        const tenant = generator.generateBase(ownerName, version);

        const response = await apiService.createTenant(
            {
                email: tenant.email,
                companyName: tenant.companyName,
                subdomain: tenant.subdomain,
                firstName: "QTS",
                lastName: "QTS",
                pass: "123123",
                countryCode: "VN",
                isChinaLang: false,
                XeroTenants: null
            },
            tenant.subdomain
        );

        // ✅ SUCCESS
        if (response.status === 200) {
            return {
                success: true,
                tenant,
                apiResult: response.body,
                version
            };
        }

        // ❌ FAIL → retry
        lastError = response.body;
        version++;
    }

    throw new Error("Cannot create tenant after 5 attempts: " + JSON.stringify(lastError));
}

module.exports = {
    generate
};