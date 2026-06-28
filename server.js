const express = require("express"); //Khởi động express, đăng ký route, lắng nghe cổng 3000
const path = require("path");

const tenantRoute = require("./route/tenant.route");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "web")));

app.use("/", tenantRoute);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});