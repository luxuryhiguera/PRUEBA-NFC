document.getElementById('abrirBoton').addEventListener('click', () => {
    const clave = prompt("🔐 Introduce la clave para abrir el garaje:");

    if (!clave) return;

    fetch("https://hook.eu2.make.com/13gq3pjn6goem85f6z68qt9g9d6clxrf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clave: clave })
    })
    .then(res => {
        if (res.ok) {
            alert("✅ Puerta abierta correctamente.");
        } else {
            alert("❌ Clave incorrecta o error al validar.");
        }
    })
    .catch(() => {
        alert("❌ Error de red o sistema.");
    });
});
