let currentTenantUrl = "";

async function generate() {

    const env = document.getElementById("envSelect").value;

    const response = await fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ env })
    });

    const data = await response.json();

    const t = data.tenant;

    currentTenantUrl = t.url;

    document.getElementById("result").innerHTML = `

    <hr>

    <h3>✅ Tenant Created Successfully</h3>

  <!-- <p><b>Owner:</b> ${t.owner}</p> -->

   <p><b>Subdomain:</b> ${t.subdomain}</p> 

  <!-- <p><b>Email:</b> ${t.email}</p> -->

  <!-- <p><b>Password:</b> ${t.password}</p> -->

  <!-- <p><b>Company:</b> ${t.companyName}</p> -->

  <!-- <p><b>URL:</b> ${t.url}</p> -->

    `;

    
}

async function copyUrl() {

    if (!currentTenantUrl) {

        alert("Please generate a tenant first.");

        return;

    }

    await navigator.clipboard.writeText(currentTenantUrl);

    alert("URL copied successfully!");

}
function openTenant() {

    if (!currentTenantUrl) {

        alert("Please generate a tenant first.");

        return;

    }

    window.open(currentTenantUrl, "_blank");

}//Browser sẽ load app.js, khi click button sẽ gọi hàm generate() - nó bắt đầu tìm (có route nào xử lý không) -> tenant.route.js
async function autoLogin() {

    if (!currentTenantUrl) {

        alert("Please generate a tenant first.");

        return;

    }

    const response = await fetch("/auto-login", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            url: currentTenantUrl

        })

    });

    const data = await response.json();

    alert(data.message);

}