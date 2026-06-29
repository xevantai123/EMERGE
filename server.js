const express = require("express"); 
const path = require("path");

const tenantRoute = require("./route/tenant.route");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "web")));

app.use("/", tenantRoute);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
//Khởi động express - mở port 3000 - cho phép Browser truy cập - đăng ký route -> web/index.html