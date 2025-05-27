document.getElementById('formulario-apertura').innerHTML = `
  <form onsubmit="return validarClave()" id="clave-apertura">
    <input type="password" id="claveInput" placeholder="Introduce la clave" required>
    <button type="submit">Abrir</button>
  </form>
  <p id="mensaje-error" style="color: red; display: none;">❌ Clave incorrecta</p>
`;

function validarClave() {
  const claveCorrecta = "2211";
  const claveIngresada = document.getElementById("claveInput").value;

  if (claveIngresada === claveCorrecta) {
    // Ocultar mensaje de error si estaba visible
    document.getElementById("mensaje-error").style.display = "none";

    fetch("https://maker.ifttt.com/trigger/PUERTA%20GARAJE%20OPEN/with/key/iv2ZACtTMRjhvhj0aPq-uMex_k6Xb9coxM0V8C2u7Wr", {
      mode: 'no-cors'
    })
    .then(() => {
      document.getElementById('formulario-apertura').innerHTML = `<p style="color: lime;">✅ Puerta abierta correctamente</p>`;
    })
    .catch(() => {
      // En caso de fallo extremo de red
      document.getElementById('formulario-apertura').innerHTML = `<p style="color: red;">⚠️ No se pudo comunicar con el sistema</p>`;
    });
  } else {
    document.getElementById("mensaje-error").style.display = "block";
  }

  return false; // Prevenir envío del formulario
}
