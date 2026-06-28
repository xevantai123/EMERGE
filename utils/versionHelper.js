function extractVersion(name) {
    const match = name.match(/-v(\d+)$/);
    return match ? parseInt(match[1]) : 0;
}

function buildName(base, version) {
    return `${base}-v${version}`;
}

module.exports = {
    extractVersion,
    buildName
};