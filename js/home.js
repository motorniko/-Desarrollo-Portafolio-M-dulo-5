import ApiClient from "./apiClient.js";

const api = new ApiClient("data/clima.json");
const lista = document.getElementById("lista-lugares");

async function cargarHome() {
  try {
    const data = await api.obtenerDatos();

    data.lugares.forEach(lugar => {
      const div = document.createElement("div");
      div.classList.add("lugar");

      const hoy = lugar.pronostico[0];

      div.innerHTML = `
        <strong>${lugar.nombre}</strong><br>
        ${hoy.temp} °C - ${hoy.estado}
      `;

      div.addEventListener("click", () => {
        window.location.href = `detalle.html?id=${lugar.id}`;
      });

      lista.appendChild(div);
    });
  } catch {
    lista.textContent = "Error al cargar los datos.";
  }
}

cargarHome();