export default class ApiClient {
  constructor(url) {
    this.url = url;
  }

  async obtenerDatos() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Error al cargar la API");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}