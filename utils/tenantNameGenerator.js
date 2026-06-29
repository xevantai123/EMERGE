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
//gọi qua config/owners.js để lấy thông tin owner, gọi dateHelper.js để lấy ngày hiện tại, 
//gọi versionHelper.js để build tên subdomain, trả về object tenant gồm owner, subdomain, email, companyName
//Gọi qua api.service.js