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

    document.getElementById("result").innerHTML =
        `
        <p>${data.message}</p>
        <p><b>Tenant:</b> ${data.tenant}</p>
        <p><b>Username:</b> ${data.username}</p>
        <p><b>Password:</b> ${data.password}</p>
        `;
}