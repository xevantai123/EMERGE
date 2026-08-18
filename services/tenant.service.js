const generator = require("../utils/tenantNameGenerator");
const apiService = require("./api.service");
const registerService = require("./register.service");

async function generate(ownerName, environment) {

    let version = 1;

    let lastError = null;

    while (version <= 5) {

        const tenant = generator.generateBase(ownerName, version);

        if (environment === "live") {

    await registerService.registerTenant(
        tenant.companyName,
        tenant.email
    );

    return {
        success: true,
        tenant,
        environment
    };
}

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
            tenant.password = "123123";

            tenant.url =
            `https://${tenant.subdomain}.emerge-test.com`;
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