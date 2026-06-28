function getTodayMMDD() {

    const date = new Date();

    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    return `${mm}${dd}`;
}

module.exports = {
    getTodayMMDD
};