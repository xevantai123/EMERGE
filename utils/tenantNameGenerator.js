const owners = require("../config/owners");
const { getTodayMMDD } = require("./dateHelper");
const { buildName } = require("./versionHelper");

function generateBase(ownerName, version) {

    const owner = owners.find(x => x.displayName === ownerName);

    if (!owner) throw new Error("Owner not found");

    const date = getTodayMMDD();

    const base = `${owner.prefix}-${date}`;

    const subdomain = buildName(base, version);

    return {
        owner: owner.displayName,
        subdomain,
        email: `${subdomain}@gmail.com`,
        companyName: subdomain
    };
}

module.exports = {
    generateBase
};