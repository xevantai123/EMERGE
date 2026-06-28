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

    document.getElementById("result").innerHTML = `
        <p>Owner: ${data.tenant.owner}</p>
        <p>Subdomain: ${data.tenant.subdomain}</p>
        <p>Email: ${data.tenant.email}</p>
        <p>Company: ${data.tenant.companyName}</p>
    `;

}