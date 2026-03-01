import ApiClient from "./apiClient.js";
import WeatherApp from "./weatherApp.js";

const api = new ApiClient("data/clima.json");
const app = new WeatherApp(api);

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const nombreLugar = document.getElementById("nombre-lugar");
const pronosticoDiv = document.getElementById("pronostico");
const estadisticasDiv = document.getElementById("estadisticas");

async function cargarDetalle() {
  try {
    const data = await api.obtenerDatos();
    const lugar = data.lugares.find(l => l.id === id);

    nombreLugar.textContent = lugar.nombre;

    lugar.pronostico.forEach(dia => {
      const p = document.createElement("p");
      p.textContent = `${dia.dia}: ${dia.temp} °C - ${dia.estado}`;
      pronosticoDiv.appendChild(p);
    });

    const stats = app.calcularEstadisticas(lugar.pronostico);
    const alertas = app.generarAlertas(stats);

    estadisticasDiv.innerHTML = `
      <p>Máxima: ${stats.max} °C</p>
      <p>Mínima: ${stats.min} °C</p>
      <p>Promedio: ${stats.promedio.toFixed(1)} °C</p>
    `;

    alertas.forEach(a => {
      const div = document.createElement("div");
      div.classList.add("alerta");
      div.textContent = a;
      estadisticasDiv.appendChild(div);
    });
  } catch {
    estadisticasDiv.textContent = "Error al cargar el detalle.";
  }
}

cargarDetalle();