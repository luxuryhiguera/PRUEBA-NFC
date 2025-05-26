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
    fetch("https://maker.ifttt.com/trigger/PUERTA%20GARAJE%20OPEN/with/key/iv2ZACtTMRjhvhj0aPq-uMex_k6Xb9coxM0V8C2u7Wr")
      .then(() => {
        document.getElementById('formulario-apertura').innerHTML = `<p style="color: lime;">✅ Puerta abierta correctamente</p>`;
      })
      .catch(() => {
        document.getElementById('formulario-apertura').innerHTML = `<p style="color: orange;">⚠️ Error al comunicar con el sistema</p>`;
      });
  } else {
    document.getElementById("mensaje-error").style.display = "block";
  }

  return false; // Prevenir recarga de la página
}