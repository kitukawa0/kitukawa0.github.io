function copyIP() {
    const ip = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ip);
    alert("IP скопирован!");
}