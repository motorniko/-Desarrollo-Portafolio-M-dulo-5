export default class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  calcularEstadisticas(pronostico) {
    const temperaturas = pronostico.map(d => d.temp);
    const max = Math.max(...temperaturas);
    const min = Math.min(...temperaturas);
    const promedio = temperaturas.reduce((a, b) => a + b, 0) / temperaturas.length;

    const diasLluvia = pronostico.filter(d => d.estado === "Lluvioso").length;

    return { max, min, promedio, diasLluvia };
  }

  generarAlertas({ promedio, diasLluvia }) {
    const alertas = [];

    if (promedio > 28) {
      alertas.push("Alerta de calor");
    }

    if (diasLluvia >= 3) {
      alertas.push("Semana lluviosa");
    }

    return alertas;
  }
}